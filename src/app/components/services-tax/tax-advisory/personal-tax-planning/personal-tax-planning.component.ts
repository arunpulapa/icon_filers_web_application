import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-tax-planning',
  templateUrl: './personal-tax-planning.component.html',
  styleUrls: ['./personal-tax-planning.component.scss']
})
export class PersonalTaxPlanningComponent {
 activePlanningTab: 'goals' | 'review' | 'missed' | 'amend' | 'stock' = 'goals';

  setPlanningTab(tab: 'goals' | 'review' | 'missed' | 'amend' | 'stock') {
    this.activePlanningTab = tab;
  }
}
