import { Component } from '@angular/core';

@Component({
  selector: 'app-general-advisory',
  templateUrl: './general-advisory.component.html',
  styleUrls: ['./general-advisory.component.scss']
})
export class GENERALADVISORYComponent {
activeAdvisoryTab: 'intro' | 'consult30' | 'consult60' | 'secretary' | 'compliance' = 'intro';

  setAdvisoryTab(
    tab: 'intro' | 'consult30' | 'consult60' | 'secretary' | 'compliance'
  ) {
    this.activeAdvisoryTab = tab;
  }
}
