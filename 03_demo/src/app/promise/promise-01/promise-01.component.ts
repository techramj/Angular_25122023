import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-01',
  templateUrl: './promise-01.component.html',
  styleUrl: './promise-01.component.css'
})
export class Promise01Component implements OnInit {
  
  ngOnInit(): void {
    console.log('Promise01Component init called');
    //declare
    let promise1 = new Promise<string>((resolve, reject )=>{
      console.log('Inside promise!!!!!');
      setTimeout(()=>{
        resolve('promised completed!!');
        resolve('promised completed again!!');
        resolve('promised completed again and again!!');
      }, 2000);
    });

    //calling the promise
    //promise1.then( (resolve)=>{} ).catch( (err)=>{} );
    promise1.then((resolve)=>{
      console.log(resolve);
    }).catch((err)=>{
      console.log('error: ',err);
    });
    

    console.log('Promise01Component init end.........');
  }
}
