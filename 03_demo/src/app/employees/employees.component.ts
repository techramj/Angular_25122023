import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];



  constructor(private route:ActivatedRoute, 
    private empService:EmpService,
    private router:Router){}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    let name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.employees = this.empService.getEmployeesByName(name);
    if(this.employees.length == 0){
      //navigate to employee not found
      console.log("redirecting to emp not found");
      this.router.navigateByUrl("emp-not-found");
    }
  }

}
