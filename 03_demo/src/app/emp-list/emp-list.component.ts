import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit {

  employees: Employee[];

  constructor(private empService: EmpService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(data => { this.employees = data });
  }

  loadData() {
    this.empService.getEmployees().subscribe(data => { this.employees = data });
  }

  deleteEmp(id: any) {
    this.empService.deleteEmployee(id).subscribe(data => {
      this.loadData();
    });
  }

}
