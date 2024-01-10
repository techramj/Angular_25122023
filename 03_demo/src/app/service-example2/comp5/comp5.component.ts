import { Component } from '@angular/core';
import { Example2Service } from '../../example2.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrl: './comp5.component.css',
  providers: []
})
export class Comp5Component {
  title5 = '';
  arr5:number[]  =[];

  constructor(private exp2Service: Example2Service){}

  ngOnInit(): void {
    this.title5 = this.exp2Service.title;
    this.arr5 = this.exp2Service.arr;
  }
}
