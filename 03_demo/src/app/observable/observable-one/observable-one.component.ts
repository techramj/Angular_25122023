import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-one',
  templateUrl: './observable-one.component.html',
  styleUrl: './observable-one.component.css'
})
export class ObservableOneComponent implements OnInit, OnDestroy {

  subscription:Subscription;

  ngOnInit(): void {
    //this.synchornousExample();
    //this.asyncExample();

    let observable1 = interval(1000);

    this.subscription = observable1.subscribe((num)=>{
      console.log(num);
    });

    console.log('init completed!!');
  }

  synchornousExample(){
    alert('one');
    alert('two');
    alert('three');
  }

  asyncExample(){
    setTimeout(()=>{
      console.log('time completed: one');
    }, 2000);

    setTimeout(()=>{
      console.log('time completed: two');
    }, 1000);

    setTimeout(()=>{
      console.log('time completed: three');
    }, 3000);
  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('ObservableOneComponent destroy called');
  }


}
