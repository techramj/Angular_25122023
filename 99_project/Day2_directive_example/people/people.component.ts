import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  name:string = '';
  age:number = 0;
  citizen:string ='';


  people: {name:string, age:number, nationality:string}[]   = [
    {name:'Sammeer', age:21, nationality:'Indian'},
    {name:'Jack', age:41, nationality:'US'},
    {name:'Ramesh', age:22, nationality:''},
    {name:'Suresh',age:0, nationality:'Indian'},
  ];

  addPerson(){
    this.people.push({name:this.name, age:this.age, nationality:this.citizen});
    this.name = '';
    this.age = 0;
    this.citizen = '';
  }
}
