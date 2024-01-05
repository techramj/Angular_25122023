import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  name:string = "";
  desc:string = "";
  color:string = 'black';

  onAddServer(){}
  onAddBlueprint(){};

}
