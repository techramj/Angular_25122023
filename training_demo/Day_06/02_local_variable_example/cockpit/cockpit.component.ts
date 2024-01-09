import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() onAddServerEvent= new EventEmitter<{name:string, desc:string}>();
  @Output() onBlueprintEvent= new EventEmitter<{name:string, desc:string}>();

  
  onAddServer(name:any, content:any){
    console.log(name,content);  
    this.onAddServerEvent.emit({name:name, desc:content});

  }
  onAddBlueprint(name:any, content:any){
    this.onBlueprintEvent.emit({name:name, desc:content});
   // this.reset();
  }

}
