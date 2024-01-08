import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  arr = [1,2,3];

  delete(){
    this.arr.pop();
  }

}

