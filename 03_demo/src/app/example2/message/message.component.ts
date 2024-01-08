import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnChanges {
  @Input() messageCount:any = 0;
  toBeDisplay:boolean = false;
  buttonName = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(this.messageCount ==5){
      this.buttonName = 'Silver';
      this.toBeDisplay = true;
    }else if(this.messageCount ==10){
      this.buttonName = 'Golden';
      this.toBeDisplay = true;
    }else if(this.messageCount ==15){
      this.buttonName = 'Platinum';
      this.toBeDisplay = true;
    }else{
      this.toBeDisplay = false;
    }
  }

  
}
