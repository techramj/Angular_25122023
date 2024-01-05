import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = "";
  desc:string = "";
  color:string = 'black';

  elements:{name:string, desc:string, type:string}[] =[];


  onAddServer(){
    this.elements.push({name:this.name, desc:this.desc, type:"server"});
  }

  onAddBlueprint(){
  
    this.elements.push({name:this.name, desc:this.desc, type:"blueprint"});
  }


  reset(){
    this.name = '';
    this.desc = '';
  }
  
}

