import { Component } from '@angular/core';

@Component({
  selector: 'app-llc-corporation-formation',
  templateUrl: './llc-corporation-formation.component.html',
  styleUrls: ['./llc-corporation-formation.component.scss']
})
export class LLCCorporationFormationComponent {
 formationTab: 'owners' | 'ein' | 'structure' | 'name' | 'state' = 'owners';

  setFormationTab(
    tab: 'owners' | 'ein' | 'structure' | 'name' | 'state'
  ) {
    this.formationTab = tab;
  }
}
