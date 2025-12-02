import { Component } from '@angular/core';

@Component({
  selector: 'app-international-tax-returns',
  templateUrl: './international-tax-returns.component.html',
  styleUrls: ['./international-tax-returns.component.scss']
})
export class InternationalTaxReturnsComponent {
 activeIntlTab: 'ftc' | 'foue' | 'fcorp' | 'fpart' | 'branch' = 'ftc';

  setIntlTab(tab: 'ftc' | 'foue' | 'fcorp' | 'fpart' | 'branch') {
    this.activeIntlTab = tab;
  }
}
