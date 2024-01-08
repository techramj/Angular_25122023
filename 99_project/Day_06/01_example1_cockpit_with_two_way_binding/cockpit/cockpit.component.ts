import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() onAddServerEvent= new EventEmitter<{name:string, desc:string}>();
  @Output() onBlueprintEvent= new EventEmitter<{name:string, desc:string}>();

  name:string = "";
  desc:string = "";
  
  onAddServer(){
    this.onAddServerEvent.emit({name:this.name, desc:this.desc});
    this.reset();
  }
  onAddBlueprint(){
    this.onBlueprintEvent.emit({name:this.name, desc:this.desc});
    this.reset();
  }

  reset(){
    this.name = '';
    this.desc = '';
  }



}
