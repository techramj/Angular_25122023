import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class LogService {

  private logs:any[] = [{"msg":"Button Clicked", time:new Date()}, 
  {"msg":"Button Clicked", time:new Date()}];

  constructor() { }

  getLogs(){
    return this.logs;
  }

  addLog(log:any){
    this.logs.push(log);
  }
}
