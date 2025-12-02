import { Component } from '@angular/core';

@Component({
  selector: 'app-business-tax-returns',
  templateUrl: './business-tax-returns.component.html',
  styleUrls: ['./business-tax-returns.component.scss']
})
export class BusinessTaxReturnsComponent {
 activeBizTab: 'partnership' | 'llc' | 'ccorp' | 'scorp' | 'sole' = 'partnership';

  setBizTab(tab: 'partnership' | 'llc' | 'ccorp' | 'scorp' | 'sole') {
    this.activeBizTab = tab;
  }
}
