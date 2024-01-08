import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-count',
  templateUrl: './button-count.component.html',
  styleUrl: './button-count.component.css'
})
export class ButtonCountComponent {
 
  @Output() countEvent = new EventEmitter<number>();

  buttonCount:number = 0;

  onButtonClicked(){
    this.buttonCount+=1;
    this.countEvent.emit(this.buttonCount);
  }
}
