import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  count:number;


  onButtonClicked(val:number){
    console.log(val);
    this.count = val;
  }
}
