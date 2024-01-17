import { Component } from '@angular/core';
import { EmpService } from '../service/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrl: './emp-create.component.css'
})
export class EmpCreateComponent {

  constructor(private empService:EmpService, private router:Router){}

  addEmployee(name:string, email:string, salary:string){
    this.empService.addEmployee({name,email,salary}).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/emp-list");
    });
  }
}
