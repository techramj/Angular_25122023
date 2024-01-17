import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css'
})
export class EmpEditComponent implements OnInit{
  id:string;
  emp:Employee;
  constructor(private route:ActivatedRoute, 
    private empService:EmpService,
    private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(data=> this.emp = data);
  }

  updateEmployee(){
    this.empService.updateEmployee(this.id, this.emp).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/emp-list");
    });
  }
}
