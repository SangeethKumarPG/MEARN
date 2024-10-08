import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail : string = "";
  userPassword : string = "";
  constructor(private authRouter:Router, private dataService:DataService){}
  login(){
    // alert(this.userEmail+":"+this.userPassword);
    this.dataService.email = this.userEmail;
    this.dataService.password = this.userPassword;
    this.authRouter.navigateByUrl('/dashboard');
  }
}
