import { Component } from '@angular/core';

@Component({
  selector: 'app-button-count',
  templateUrl: './button-count.component.html',
  styleUrl: './button-count.component.css'
})
export class ButtonCountComponent {
  buttonCount:number = 0;

  onButtonClicked(){
    this.buttonCount+=1;
  }
}
