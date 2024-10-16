import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  employeeDetailsById:any = {};
  // ActivatedRoute class is used to extract params from the URL path
  constructor(private route:ActivatedRoute, private empService:EmployeeApiService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (res:any)=>{
        console.log(res);
        const {id} = res;
        this.getEmployeeDetailsById(id);
      }
    )
  }

  getEmployeeDetailsById(empId:any){
    this.empService.getEmployeeDetailsByIdApi(empId).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.employeeDetailsById = res;
      },
      error: (err:any)=>{
        console.log(err);
      }
    });
  }

  handleSubmit(){
    this.employeeDetailsById.status = parseInt(this.employeeDetailsById.status);
    this.employeeDetailsById.id = Number(this.employeeDetailsById.id);
    this.empService.updateEmployeeApi(this.employeeDetailsById, this.employeeDetailsById.id).subscribe({
      next:(res)=>{
        Swal.fire({
          icon:'success',
          title: 'Success',
          text: `Employee ${this.employeeDetailsById.id} updated successfully`
        })
        this.router.navigateByUrl('/employee')
      },
      error:(err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'unable to update employee'
        })
      }
    });
  }

  cancel(){
    this.router.navigateByUrl('/employee');
  }
}
