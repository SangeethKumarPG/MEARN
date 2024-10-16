import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  server_url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  addEmployeeApi(employeeDetails:any){
    return this.http.post(`${this.server_url}/employee`, employeeDetails);
  }

  //get all employees
  getAllEmployeesApi(){
    return this.http.get(`${this.server_url}/employee`);
  }

  //delete an employee
  deleteEmployeeApi(employeeId:any){
    return this.http.delete(`${this.server_url}/employee/${employeeId}`);
  }

  // get employee details by id
  getEmployeeDetailsByIdApi(empId:any){
    return this.http.get(`${this.server_url}/employee/${empId}`);
  }

  //update employee details
  updateEmployeeApi(employeeDetails:any, empId:any){
    return this.http.put(`${this.server_url}/employee/${empId}`, employeeDetails);
  }



}
