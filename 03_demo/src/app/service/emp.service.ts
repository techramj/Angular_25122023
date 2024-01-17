import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  //url:string = 'http://localhost:3000/employees';
  url:string = "http://localhost:8080/employees";

  employees:Employee[] = [];

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http:HttpClient) {
   }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  deleteEmployee(id:any) : Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }

  addEmployee(emp:any):Observable<Employee>{
    return this.http.post<Employee>(this.url, JSON.stringify(emp), this.httpOption);
  }

  getEmployeeById(id:any) : Observable<Employee> {
    //return this.employees.filter(e=>e.id==id)[0];
    return this.http.get<Employee>(this.url+"/"+id);
  }

  updateEmployee(id:any, emp:any) : Observable<Employee>{
    return this.http.put<Employee>(this.url+"/"+id, JSON.stringify(emp), this.httpOption);
  }

  getEmployeesByName(name:any) {
    //return this.employees.filter(e=>e.name == name);
  }
}
