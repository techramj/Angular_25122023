import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  servers:{name:string, description:string}[] =[
    {name:'Frontend server', description:'The code is written in Angular'},
    {name:'Backend server', description:'The code is written in Java'},
  ];
}
