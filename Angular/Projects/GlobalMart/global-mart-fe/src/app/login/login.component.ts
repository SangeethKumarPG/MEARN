import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private apiService:ApiService, private router:Router){}
  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  login(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const user={
      email, 
      password
    };
    this.apiService.loginUserAPI(user).subscribe({
      next:(res:any)=>{
        // console.log(res);
        Swal.fire({
          title:"Login Success",
          text:"You have successfully logged in",
          icon:"success",
        })
        sessionStorage.setItem('username', res.existingUser.username);
        sessionStorage.setItem('token', res.token)
        this.router.navigateByUrl('/')
      },
      error:(error)=>{
        console.log(error);
        Swal.fire({
          title:"Login Failed",
          text:"Please check your email and password",
          icon:"error",
        })
      }
    })
  }
}
