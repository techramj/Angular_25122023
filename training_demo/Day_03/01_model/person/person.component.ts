import { Component, Input } from '@angular/core';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  //template: '<h3>Welcom Jack</h3>',
  styleUrl: './person.component.css'
})
export class PersonComponent {
 @Input() person:Person = new Person('',0,'');

}
