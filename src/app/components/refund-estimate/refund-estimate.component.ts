import { Component } from '@angular/core';

type FilingStatus = '' | 'single' | 'married' | 'hoh' | 'business';

interface RefundModel {
  income: number | null;
  deductions: number | null;
  credits: number | null;
  taxPaid: number | null;
  state: string;
  filingStatus: FilingStatus;
}

interface RefundSummary {
  standardDeduction: number;
  extraDeductions: number;
  taxableIncome: number;
  estimatedTax: number;
  creditsUsed: number;
  taxAfterCredits: number;
  refundAmount: number;
  refundType: 'refund' | 'due' | 'na';
}

@Component({
  selector: 'app-refund-estimate',
  templateUrl: './refund-estimate.component.html',
  styleUrls: ['./refund-estimate.component.scss'],
})
export class RefundEstimateComponent {
  model: RefundModel = {
    income: null,
    deductions: null,
    credits: null,
    taxPaid: null,
    state: '',
    filingStatus: '',
  };

  summary: RefundSummary = {
    standardDeduction: 0,
    extraDeductions: 0,
    taxableIncome: 0,
    estimatedTax: 0,
    creditsUsed: 0,
    taxAfterCredits: 0,
    refundAmount: 0,
    refundType: 'na',
  };

  onEstimate(): void {
    const income = this.toNumber(this.model.income);
    const taxPaid = this.toNumber(this.model.taxPaid);
    const deductionsInput = this.toNumber(this.model.deductions);
    const creditsInput = this.toNumber(this.model.credits);
    const filingStatus = this.model.filingStatus;

    // Need minimum info
    if (!income || !taxPaid || !filingStatus) {
      this.summary.refundType = 'na';
      return;
    }

    const standardDeduction = this.getStandardDeduction(filingStatus);
    const extraDeductions = Math.max(deductionsInput - standardDeduction, 0);
    const totalDeductions = standardDeduction + extraDeductions;

    const taxableIncome = Math.max(income - totalDeductions, 0);
    const estimatedTax = this.getEstimatedTax(taxableIncome, filingStatus);

    // Credits cannot reduce tax below 0
    const creditsUsed = Math.min(creditsInput, estimatedTax);
    const taxAfterCredits = Math.max(estimatedTax - creditsUsed, 0);

    const diff = taxPaid - taxAfterCredits;
    let refundType: RefundSummary['refundType'] = 'na';
    let refundAmount = 0;

    if (diff > 0) {
      refundType = 'refund';
      refundAmount = diff;
    } else if (diff < 0) {
      refundType = 'due';
      refundAmount = Math.abs(diff);
    } else {
      refundType = 'na';
      refundAmount = 0;
    }

    this.summary = {
      standardDeduction,
      extraDeductions,
      taxableIncome,
      estimatedTax,
      creditsUsed,
      taxAfterCredits,
      refundAmount,
      refundType,
    };
  }

  // --- Helpers ---

  private toNumber(value: number | null | undefined): number {
    return value && !isNaN(value) ? value : 0;
  }

  /**
   * Approximate standard deductions (for recent years, rough values).
   * This is just for estimation and not exact IRS data.
   */
  private getStandardDeduction(status: FilingStatus): number {
    switch (status) {
      case 'single':
        return 14000; // approx
      case 'married':
        return 28000; // approx
      case 'hoh':
        return 21000; // approx
      case 'business':
        // For pure business/entity filings, often deductions are itemized already,
        // so we treat standard deduction as 0 and rely on user-entered deductions.
        return 0;
      default:
        return 0;
    }
  }

  /**
   * Very simplified tax calculation using rough brackets.
   * This is NOT exact IRS math, but good enough for a quick estimate.
   */
  private getEstimatedTax(taxableIncome: number, status: FilingStatus): number {
    if (taxableIncome <= 0) return 0;

    // Simple bracket system: [limit, rate]
    let brackets: { limit: number; rate: number }[];

    if (status === 'married') {
      brackets = [
        { limit: 22000, rate: 0.1 },
        { limit: 89450, rate: 0.12 },
        { limit: 190750, rate: 0.22 },
        { limit: Infinity, rate: 0.24 },
      ];
    } else if (status === 'hoh') {
      brackets = [
        { limit: 16550, rate: 0.1 },
        { limit: 63100, rate: 0.12 },
        { limit: 95350, rate: 0.22 },
        { limit: Infinity, rate: 0.24 },
      ];
    } else {
      // single, business default
      brackets = [
        { limit: 11000, rate: 0.1 },
        { limit: 44725, rate: 0.12 },
        { limit: 95375, rate: 0.22 },
        { limit: Infinity, rate: 0.24 },
      ];
    }

    let remaining = taxableIncome;
    let tax = 0;
    let lastLimit = 0;

    for (const bracket of brackets) {
      if (remaining <= 0) break;
      const band = Math.min(remaining, bracket.limit - lastLimit);
      if (band > 0) {
        tax += band * bracket.rate;
        remaining -= band;
        lastLimit = bracket.limit;
      }
    }

    return Math.max(Math.round(tax), 0);
  }
}
