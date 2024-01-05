import { Component } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  name:string = '';
  desc:string = '';
  servers:Server[] =[
    new Server('Frontend server', 'The code is written in Angular'),
    new Server('Backend server', 'The code is written in Java'),
  ];


  addServer(){
    this.servers.push(new Server(this.name, this.desc));
    this.reset();
  }

  reset(){
    this.name = '';
    this.desc = '';
  }
}
