import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class Example2Service {

  title:string  = "Angular";

  arr:number[] = [1,2,3];

  constructor() { }

  setTitle(title:string){
    console.log('set the title to ', title);
    this.title = title;
  }

  addNumber(n:number){
    console.log('number added', n);
    this.arr.push(n);
  }
}
