import { Component, Input } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  @Input() server:Server;
}
