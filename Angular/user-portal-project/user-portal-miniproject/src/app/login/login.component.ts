import { Component } from '@angular/core';
import Swal from'sweetalert2';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  empEmail:string = "";
  empPassword:string = "";
  constructor(private adminService: AdminApiService, private router:Router){}
  login(){
    if(!this.empEmail || !this.empPassword){
      Swal.fire({
        title: "Oops!",
        text: "Please fill the form completely",
        icon: "error"
      });
    }else{
      this.adminService.adminAuthorize().subscribe({
        next:(res:any)=>{
          console.log("Login success")
          const {email, password} = res;
          // console.log(res);
          if(email === this.empEmail && password === this.empPassword){
            Swal.fire({
              title: "Login Success!",
              text: "You have successfully logged in!",
              icon: "success"
            });
            this.router.navigateByUrl("/dashboard")
          }else{
            Swal.fire({
              title:"Incorrect Email or Password",
              text: "Please try again with correct credentials",
              icon: "error"
            })
          }
        },
        error:(error:any)=>{
          console.log("Login failed")
        }
      })
    }
  }
}
