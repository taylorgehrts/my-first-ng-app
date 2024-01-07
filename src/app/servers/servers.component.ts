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
  serverCreated = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    },2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "A server was created.  It is called: " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
