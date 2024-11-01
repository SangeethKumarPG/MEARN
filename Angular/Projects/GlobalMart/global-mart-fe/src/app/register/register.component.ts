import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private formBuilder : FormBuilder, private apiService:ApiService, private router:Router){}
  registerForm = this.formBuilder.group({
    username:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email:['', [Validators.required]],
    password:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  registerUser(){
    // alert("Inside registerUser");
    if(this.registerForm.valid){
      const username = this.registerForm.value.username;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const user = {
        username:username,
        email:email,
        password:password
      }
      this.apiService.registerUserAPI(user).subscribe({
        next:(response)=>{
          Swal.fire({
            title: 'Success',
            text: 'User registered successfully',
            icon:'success',
          })
          console.log(response);
          this.registerForm.reset();
          this.router.navigateByUrl('/user/login')
        },
        error:(error)=>{
          if(error.status === 406){
            Swal.fire({
              title: 'Error',
              text: 'Username already exists',
              icon: 'error',
            })
          }else{
            Swal.fire({
              title: 'Error',
              text: 'error while registering user',
              icon: 'error',
            })
          }

          console.log(error);
        }
      })
    }else{
      alert("Form Invalid")
    }
  }
}
