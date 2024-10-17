import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeApiService } from '../services/employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  constructor(private empService:EmployeeApiService, private router:Router) { }
  employee:any={
    id:'',
    username:'',
    email:'',
    status:1,
  }
  clearFields(){
    this.employee={
      status:1
    }
  }
  addEmployee(){
    if (!this.employee.username || !this.employee.email || !this.employee.id || !this.employee.status)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all fields',
      });
    }else{
      // Number() and parseInt() can be used to convert to numbers.
      this.employee.status = Number(this.employee.status);
      this.employee.id = parseInt(this.employee.id);
      this.empService.addEmployeeApi(this.employee).subscribe({
        next:(res)=>{
          console.log(res);
          Swal.fire({
            icon:'success',
            title: 'Employee Added',
            text: 'Employee added successfully',
            });
          this.clearFields();
          this.router.navigateByUrl('/employee')
        },
        error:(err)=>{
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
          });
        }
      });
    }
  }
}
