import { Component } from '@angular/core';

@Component({
  selector: 'app-federal-state-filing',
  templateUrl: './federal-state-filing.component.html',
  styleUrls: ['./federal-state-filing.component.scss']
})
export class FederalStateFilingComponent {
activeIndivTab: 'residents' | 'nonresidents' | 'immigrants' | 'salary' | 'contractor' = 'residents';

setIndivTab(tab: 'residents' | 'nonresidents' | 'immigrants' | 'salary' | 'contractor') {
  this.activeIndivTab = tab;
}

}
