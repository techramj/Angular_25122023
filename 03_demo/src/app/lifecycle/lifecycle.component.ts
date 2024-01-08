import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent  implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() greet:string = 'Hello';

  constructor(){
    //console.log('LifecycleComponent constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('LifecycleComponent ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('LifecycleComponent ngOnInit');
    //this.greet = 'Hi';
  }

  ngDoCheck(): void {
   // console.log('LifecycleComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
   // console.log('LifecycleComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    //console.log('LifecycleComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    //console.log('LifecycleComponent ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
   // console.log('LifecycleComponent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('LifecycleComponent ngOnDestroy');
  }

}
