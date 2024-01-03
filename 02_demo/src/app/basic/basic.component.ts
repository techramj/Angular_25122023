import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {
  title:string = 'Angular Basic';
  colors:string[] = ['voilet','red', 'green', 'cyan','abc'];
  day:number = 5;
  min_val:number = 1;
  max_val:number = 8;

  show = true;
  hide = true;

  employee = {
    id: 101,
    name: 's ram Jaiswal',
    salary: '99999.23673',
    variable : .15,
    gender: 'male',
    doj: new Date(),
    mobile: '8181812345',
    isMarried: true,
    city: 'Pune',
    pan:'aomp1234mab'
  };

  toggleHide(){
    this.hide = !this.hide;
  }

}


