import { Component } from '@angular/core';

@Component({
  selector: 'app-registered-agent-annual-reporting',
  templateUrl: './registered-agent-annual-reporting.component.html',
  styleUrls: ['./registered-agent-annual-reporting.component.scss']
})
export class RegisteredAgentAnnualReportingComponent {
regAgentTab: 'agent' | 'discount' | 'address' | 'physical' | 'dashboard' = 'agent';

  setRegAgentTab(
    tab: 'agent' | 'discount' | 'address' | 'physical' | 'dashboard'
  ) {
    this.regAgentTab = tab;
  }
}
