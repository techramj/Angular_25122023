import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-two',
  templateUrl: './observable-two.component.html',
  styleUrl: './observable-two.component.css'
})
export class ObservableTwoComponent implements OnInit{


  ngOnInit(): void {
    console.log('ObservableTwoComponent init called');

    //declare the obserable
    const ob1 = new Observable((sub)=>{
      console.log('inside obserable1');

      setTimeout(()=>{
        sub.next('subscribe one');
        sub.next('subscribe two');
        sub.next('subscribe three');
      }, 2000);
    });


    //calling!!!!
    ob1.subscribe((data)=>{
      console.log(data);
    });

    console.log('ObservableTwoComponent init end...........');
  }
}
