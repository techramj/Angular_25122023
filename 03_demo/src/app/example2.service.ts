import { Injectable } from '@angular/core';
import { LogService } from './log.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class Example2Service {

  title:string  = "Angular";

  arr:number[] = [1,2,3];

  constructor(private logsService:LogService) { }

  setTitle(title:string){
    console.log('set the title to ', title);
    this.logsService.addLog({msg:"title changed", time:new Date()});
    this.title = title;
  }

  addNumber(n:number){
    console.log('number added', n);
    this.logsService.addLog({msg:"number added", time:new Date()});
    this.arr.push(n);
  }
}
