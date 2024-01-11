import { Component } from '@angular/core';
import { Example2Service } from '../../example2.service';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrl: './comp6.component.css',
  providers: []
})
export class Comp6Component {
 title6 = ''
 arr6:number[]  =[];

 constructor(private exp2Service: Example2Service, private logService:LogService){}

  ngOnInit(): void {
    this.title6 = this.exp2Service.title;
     this.arr6 = this.exp2Service.arr;
  }

  changeTitle(){
    let suffix = Math.round(Math.random()*14)+2;
    this.title6 = 'Angular '+ suffix;
    this.exp2Service.setTitle(this.title6);
    this.exp2Service.addNumber(suffix);
    this.logService.addLog({"msg":"Comp6Component button clicked", time: new Date()}); 
  }

}
