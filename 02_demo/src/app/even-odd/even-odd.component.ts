import { Component } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrl: './even-odd.component.css'
})
export class EvenOddComponent {
  nums:number[]=[1,2,3,4,5,6,7,8,9,10];
  data:number[] = [...this.nums];
  color:string ='black';


  even(){
    this.data = this.nums.filter(item=> item%2==0);
    this.color = 'blue';
  }

  odd(){
    this.data = this.nums.filter(item=> item%2==1);
    this.color ='red';
  }

}
