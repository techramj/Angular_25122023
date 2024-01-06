import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  color:string = 'black';

  elements:{name:string, desc:string, type:string}[] =[
    {name:'server1', desc:'test', type:'server'},
    {name:'server blueprint', desc:'test', type:'blueprint'},
  ];


  addServer(data:any){
    this.elements.push({name:data.name, desc:data.desc, type:"server"});
  }

  addBlueprint(data:any){
    this.elements.push({name:data.name, desc:data.desc, type:"blueprint"});
  }

}

