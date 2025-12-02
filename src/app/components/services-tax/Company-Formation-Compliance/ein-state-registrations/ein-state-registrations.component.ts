import { Component } from '@angular/core';

@Component({
  selector: 'app-ein-state-registrations',
  templateUrl: './ein-state-registrations.component.html',
  styleUrls: ['./ein-state-registrations.component.scss']
})
export class EINStateRegistrationsComponent {
einStateTab: 'cta' | 'boi' | 'fincen' | 'updates' | 'bea' = 'cta';

  setEinStateTab(tab: 'cta' | 'boi' | 'fincen' | 'updates' | 'bea') {
    this.einStateTab = tab;
  }
}
