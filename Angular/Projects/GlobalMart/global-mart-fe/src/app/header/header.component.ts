import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loginUserName:any = "";
  wishListCount = 0;  
  constructor(private router:Router, private apiService:ApiService){}
  ngOnInit(): void {
    if(sessionStorage.getItem('username')){
      this.apiService.getWishListCountAPI()
      this.loginUserName = sessionStorage.getItem('username');
      this.apiService.wishListCount.subscribe((res:any)=>{
        this.wishListCount = res;
      })
    }else{
      this.loginUserName = "";
    }
  }

  logout(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this.loginUserName = "";
    this.router.navigateByUrl('');
  }
}
