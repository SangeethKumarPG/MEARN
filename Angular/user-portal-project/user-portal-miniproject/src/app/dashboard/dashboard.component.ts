import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../services/employee-api.service';
import { AdminApiService } from '../services/admin-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  profileImage:string = "assets/user-pic-new.png";
  editAdminStatus:boolean = false;
  employeeCount:number = 0;
  selected:Date | null= new Date();
  adminName:any = "";
  adminPassword:any = "";
  adminDetails:any = {};
  constructor(private empService:EmployeeApiService, private adminService:AdminApiService) { }
  ngOnInit(): void {
    
    if(sessionStorage.getItem("username")){
      this.adminName = sessionStorage.getItem("username");
    }
    if(sessionStorage.getItem("password")){
      this.adminPassword = sessionStorage.getItem("password");
    }
    this.getAdminDetails();
    this.empService.getAllEmployeesApi().subscribe({
      next:(res:any)=>{
        this.employeeCount = res.length-1;

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  editAdminDetails(){
    this.editAdminStatus = !this.editAdminStatus;
    this.adminName = sessionStorage.getItem("username");
    this.adminPassword = sessionStorage.getItem("password");
  }

  getFile(event:any){
    let fileDetails = event.target.files[0];
    // we need to convert this input to a url
    // for this we need to create an object of file reader
    let fileReader = new FileReader();
    // we need to read the file content
    fileReader.readAsDataURL(fileDetails);
    fileReader.onload = (e:any)=>{
      this.profileImage = e.target.result;
    }
  }

  getAdminDetails(){
    this.adminService.adminAuthorize().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.adminDetails = res;
        if(res.profileImage){
          this.profileImage = res.profileImage;
        }
      }
      ,
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
  updateAdmin(){
    this.adminDetails.username = this.adminName;
    this.adminDetails.password = this.adminPassword;
    this.adminDetails.profileImage = this.profileImage;
    this.adminService.updateAdmin(this.adminDetails).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: 'Success',
          text:"Admin details updated successfully",
          icon:'success',
        })
        this.editAdminStatus = false;
        sessionStorage.setItem("username",res.username);
        sessionStorage.setItem("password",res.password);
        this.adminName = res.username;
        this.adminPassword = res.password;
      },
      error:(err:any)=>{
        Swal.fire({
          title: 'Error',
          text:'Something went wrong',
          icon:'error'
        })
      }
    })
  }

  cancelUpdate(){
    this.adminName = sessionStorage.getItem("username");
    this.adminPassword = sessionStorage.getItem("password");
    this.profileImage = this.adminDetails.profileImage;
  }

}
