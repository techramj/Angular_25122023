import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-blueprint',
  templateUrl: './server-blueprint.component.html',
  styleUrl: './server-blueprint.component.css'
})
export class ServerBlueprintComponent {

  @Input() color:string;

  @Input() element:{name:string, desc:string, type:string};
  
}
