import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Seed Infotech!';

  name = "Jack";

  buttonDisabled = false;

  foo(str:string){
    console.log('str=',str);
    console.log('title=', this.title);
    console.log('name=',this.name);
  }
}
