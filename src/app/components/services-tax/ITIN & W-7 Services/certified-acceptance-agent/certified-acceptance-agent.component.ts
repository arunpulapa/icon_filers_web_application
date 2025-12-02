import { Component } from '@angular/core';

@Component({
  selector: 'app-certified-acceptance-agent',
  templateUrl: './certified-acceptance-agent.component.html',
  styleUrls: ['./certified-acceptance-agent.component.scss']
})
export class CertifiedAcceptanceAgentComponent {
caaTab: 'authorized' | 'passport' | 'certification' | 'accuracy' | 'coordination' =
    'authorized';

  setCaaTab(tab: any) {
    this.caaTab = tab;
  }
}
