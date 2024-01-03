import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  //template: '<h3>Welcom Jack</h3>',
  styleUrl: './person.component.css'
})
export class PersonComponent {
 @Input() name:string = '';
 @Input() age:number = 0;
 @Input() nationality:string = '';



}
