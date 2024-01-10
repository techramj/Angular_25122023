import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  feature = '';
  

  onNavigate(featue:string){
    console.log('Feature selected: ', featue);
    this.feature = featue;
  }
}
