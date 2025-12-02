import { Component } from '@angular/core';

@Component({
  selector: 'app-w7-ein-assistance',
  templateUrl: './w7-ein-assistance.component.html',
  styleUrls: ['./w7-ein-assistance.component.scss']
})
export class W7EINAssistanceComponent {
activeItinTab: 'filing' | 'spouse' | 'business' | 'renewal' | 'taxfiling' = 'filing';

  setItinTab(
    tab: 'filing' | 'spouse' | 'business' | 'renewal' | 'taxfiling'
  ) {
    this.activeItinTab = tab;
  }
}
