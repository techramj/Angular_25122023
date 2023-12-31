import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  
  @Output() buttonClickEvent = new EventEmitter<any>();

  @Input() server:Server;

  onButtonClicked(){
    this.buttonClickEvent.emit();
  }
}
