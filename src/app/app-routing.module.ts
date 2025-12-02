import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RefundEstimateComponent } from './components/refund-estimate/refund-estimate.component';
import { RefundComponent } from './components/refund/refund.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AmendmentFilingComponent } from './components/services-tax/amendment-filing/amendment-filing.component';
import { AdvancedTaxPlanningComponent } from './components/services-tax/advanced-tax-planning/advanced-tax-planning.component';
import { FBARFATCAComplianceComponent } from './components/services-tax/fbar-fatca-compliance/fbar-fatca-compliance.component';
import { ITINPreparationComponent } from './components/services-tax/itin-preparation/itin-preparation.component';
import { FederalStateFilingComponent } from './components/services-tax/tax-preparation-filing/federal-state-filing/federal-state-filing.component';
import { TaxRepresentationComponent } from './components/services-tax/tax-representation/tax-representation.component';
import { PayrollServicesComponent } from './components/services-tax/payroll-services/payroll-services.component';
import { SalesTaxComponent } from './components/services-tax/sales-tax/sales-tax.component';
import { AnnualReportingComponent } from './components/services-tax/annual-reporting/annual-reporting.component';
import { LLCRegistrationComponent } from './components/services-tax/llc-registration/llc-registration.component';
import { BusinessTaxReturnsComponent } from './components/services-tax/tax-preparation-filing/business-tax-returns/business-tax-returns.component';
import { InternationalTaxReturnsComponent } from './components/services-tax/tax-preparation-filing/international-tax-returns/international-tax-returns.component';
import { PersonalTaxPlanningComponent } from './components/services-tax/tax-advisory/personal-tax-planning/personal-tax-planning.component';
import { BusinessEntityTaxPlanningComponent } from './components/services-tax/tax-advisory/business-entity-tax-planning/business-entity-tax-planning.component';
import { GENERALADVISORYComponent } from './components/services-tax/tax-advisory/general-advisory/general-advisory.component';
import { W7EINAssistanceComponent } from './components/services-tax/ITIN & W-7 Services/w7-ein-assistance/w7-ein-assistance.component';
import { CertifiedAcceptanceAgentComponent } from './components/services-tax/ITIN & W-7 Services/certified-acceptance-agent/certified-acceptance-agent.component';
import { EINStateRegistrationsComponent } from './components/services-tax/Company-Formation-Compliance/ein-state-registrations/ein-state-registrations.component';
import { LLCCorporationFormationComponent } from './components/services-tax/Company-Formation-Compliance/llc-corporation-formation/llc-corporation-formation.component';
import { RegisteredAgentAnnualReportingComponent } from './components/services-tax/Company-Formation-Compliance/registered-agent-annual-reporting/registered-agent-annual-reporting.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'refund', component: RefundComponent },
  { path: 'refund-estimate', component: RefundEstimateComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'amendment-filing', component: AmendmentFilingComponent },
  { path: 'advanced-tax-planning', component: AdvancedTaxPlanningComponent },
  { path: 'fbar-fatca', component: FBARFATCAComplianceComponent },
  { path: 'itin-preparation', component: ITINPreparationComponent },

  { path: 'individual-tax-returns', component: FederalStateFilingComponent },
  { path: 'business-tax-returns', component: BusinessTaxReturnsComponent },
  { path: 'international-tax-returns', component: InternationalTaxReturnsComponent },

  { path: 'personal-tax-planning', component: PersonalTaxPlanningComponent },
  { path: 'business-entity-tax-planning', component: BusinessEntityTaxPlanningComponent },
  { path: 'general-advisory', component: GENERALADVISORYComponent },
  
  { path: 'W7-ITIN-Application', component: W7EINAssistanceComponent },
  { path: 'certified-acceptance-agent', component: CertifiedAcceptanceAgentComponent },

  { path: 'ein-state-registrations', component: EINStateRegistrationsComponent },
  { path: 'llc-corporation-formation', component: LLCCorporationFormationComponent },
  { path: 'registered-agent-annual-reporting', component: RegisteredAgentAnnualReportingComponent },

  { path: 'tax-representation', component: TaxRepresentationComponent },
  { path: 'payroll-services', component: PayrollServicesComponent },
  { path: 'sales-tax', component: SalesTaxComponent },
  { path: 'annual-reporting', component: AnnualReportingComponent },
  { path: 'llc-registration', component: LLCRegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
