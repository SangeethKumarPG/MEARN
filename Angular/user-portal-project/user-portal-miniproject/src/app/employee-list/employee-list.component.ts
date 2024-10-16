import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  allEmployeesList:any = [];
  ngOnInit(): void {
    console.log("Employee List Component Initialized");
    this.getAllEmployees();
  }
  constructor(private empService: EmployeeApiService) { }
  getAllEmployees() {
    return this.empService.getAllEmployeesApi().subscribe({
      next:(res)=>{
        // console.log(res);
        this.allEmployeesList = res;
        console.log(this.allEmployeesList);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  deleteEmployee(id:any){
    this.empService.deleteEmployeeApi(id).subscribe({
      next:(res)=>{
        this.getAllEmployees();
        Swal.fire({
          icon:'success',
          title: 'Employee Deleted Successfully',
          text: 'Employee has been deleted successfully from the database',
        })
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  sortById(){
    this.allEmployeesList.sort((a:any,b:any)=>a.id-b.id)
  }
  sortByName(){
    this.allEmployeesList.sort((a:any, b:any)=> a.username.localeCompare(b.username))
  }
}
