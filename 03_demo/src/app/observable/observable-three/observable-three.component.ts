import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-three',
  templateUrl: './observable-three.component.html',
  styleUrl: './observable-three.component.css'
})
export class ObservableThreeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    let observable1 = new Observable(sub=>{
     let age = Math.round(Math.random()*200);

     setTimeout(()=>{
      if(age<=100){
        sub.next('age ='+age);
      }else{
        sub.error('Invalid age: '+age);
      }
      
     }, 1000);
     
    });

    observable1.subscribe(data=>console.log(data), 
               err=>console.log('error=>',err));

    
  }

  ngOnDestroy(): void {
    
  }

}
