import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  employees:Employee[] = [
    {id:1, name:'Sam', salary:1000},
    {id:2, name:'Jack', salary:2000},
    {id:3, name:'Mohan', salary:9000},
    {id:4, name:'Ashwin', salary:10000},
    {id:5, name:'Jack', salary:10000},
  ];

  constructor() { }

  getEmployees(): Employee[]{
    return this.employees;
  }

  getEmployeeById(id:number) : Employee{
    return this.employees.filter(e=>e.id==id)[0];
  }

  getEmployeesByName(name:any) : Employee[]{
    return this.employees.filter(e=>e.name == name);
  }
}
