import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit-example',
  templateUrl: './cockpit-example.component.html',
  styleUrl: './cockpit-example.component.css'
})
export class CockpitExampleComponent {
  color:string = 'black';

  elements:{name:string, desc:string, type:string}[] =[
    {name:'server1', desc:'test', type:'server'},
    {name:'server blueprint', desc:'test', type:'blueprint'},
  ];

  constructor(){
    
  }


  addServer(data:any){
    this.elements.push({name:data.name, desc:data.desc, type:"server"});
  }

  addBlueprint(data:any){
    this.elements.push({name:data.name, desc:data.desc, type:"blueprint"});
  }

}
