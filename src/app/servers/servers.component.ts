import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = "test";

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = "A server was created"
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
