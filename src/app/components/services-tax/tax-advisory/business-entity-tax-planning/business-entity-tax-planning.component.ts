import { Component } from '@angular/core';

@Component({
  selector: 'app-business-entity-tax-planning',
  templateUrl: './business-entity-tax-planning.component.html',
  styleUrls: ['./business-entity-tax-planning.component.scss']
})
export class BusinessEntityTaxPlanningComponent {
 activeBizPlanTab:
    | 'goals'
    | 'review'
    | 'retirement'
    | 'payroll'
    | 'entity' = 'goals';

  setBizPlanTab(
    tab: 'goals' | 'review' | 'retirement' | 'payroll' | 'entity'
  ) {
    this.activeBizPlanTab = tab;
  }
}
