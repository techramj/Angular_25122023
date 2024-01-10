import { Component } from '@angular/core';
import { Example2Service } from '../example2.service';

@Component({
  selector: 'app-service-example2',
  templateUrl: './service-example2.component.html',
  styleUrl: './service-example2.component.css',
  providers: [Example2Service]
})
export class ServiceExample2Component {

  constructor(){}

}
