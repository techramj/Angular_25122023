import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  @Input() name:string = 'dummyName';
  @Input('desc') description:string = 'dummyDesc';
}
