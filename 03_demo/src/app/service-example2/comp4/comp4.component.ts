import { Component, OnInit } from '@angular/core';
import { Example2Service } from '../../example2.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrl: './comp4.component.css',
  providers: []
})
export class Comp4Component implements OnInit{
  title4 ='Angular';
  arr4:number[] = [];

  constructor(private exp2Service: Example2Service){}

  ngOnInit(): void {
    this.title4 = this.exp2Service.title;
    this.arr4 = this.exp2Service.arr;
  }
}
