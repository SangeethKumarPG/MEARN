import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  empEmail:string = "";
  empPassword:string = "";
  login(){
    if(!this.empEmail || !this.empPassword){
      alert("Please enter email and password");
    }else{
      alert("Logged In");
    }
  }
}
