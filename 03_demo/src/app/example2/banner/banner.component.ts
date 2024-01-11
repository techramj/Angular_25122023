import { Component } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  count:number;

  constructor(private logService:LogService){}


  onButtonClicked(val:number){
    console.log(val);
    this.logService.addLog({"msg":"BannerComponent button clicked", time: new Date()}); 
    this.count = val;
  }
}
