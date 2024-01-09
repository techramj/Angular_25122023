import { Component } from '@angular/core';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  name:string = '';
  age:number = 0;
  citizen:string ='';


  people: Person[]   = [
    new Person('Sammeer',21, 'Indian'),
    new Person('Jack',41, 'US'),
    new Person('Ramesh',22, ''),
    new Person('Suresh',0, 'Indian'),
  ];

  addPerson(){
    this.people.push(new Person(this.name, this.age, this.citizen));
    this.name = '';
    this.age = 0;
    this.citizen = '';
  }
}
