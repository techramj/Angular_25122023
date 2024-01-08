import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() onAddServerEvent= new EventEmitter<{name:string, desc:string}>();
  @Output() onBlueprintEvent= new EventEmitter<{name:string, desc:string}>();

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('contentInput') contentInput:ElementRef;

  
  onAddServer(){
    console.log(this.nameInput,this.contentInput);  
    const name = this.nameInput.nativeElement.value;
    const desc = this.contentInput.nativeElement.value;
    //this.onAddServerEvent.emit({name:name, desc:content});
    this.onAddServerEvent.emit({name,desc});

  }
  onAddBlueprint(){
    //this.onBlueprintEvent.emit({name:name, desc:content});
   // this.reset();
   const name = this.nameInput.nativeElement.value;
   const desc = this.contentInput.nativeElement.value;
   this.onBlueprintEvent.emit({name,desc});
  }

}
