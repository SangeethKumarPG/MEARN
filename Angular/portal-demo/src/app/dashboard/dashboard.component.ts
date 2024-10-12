import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  email:string = "";
  password:string = "";
  showText:boolean = false;
  changeColor:boolean = false;
  userDetails:any = [
    {
      name:"Todd",
      designation:"Manager",
      location:"Kochi"
    },
    {
      name:"Sean",
      designation:"Team Lead",
      location:"TVM"
    },
    {
      name:"Clara",
      designation:"Senior SE",
      location:"Kochi"
    },
    {
      name:"Kenneth",
      designation:"Tester",
      location:"TVM"
    },
  ]
  constructor(private homeRouter: Router, private dataService:DataService){
    this.email = this.dataService.email;
    this.password = this.dataService.password;
  }
  backToHome() {
    this.dataService.demoAlert();
    this.homeRouter.navigateByUrl('');
  }
  changeValue(){
    this.showText = !this.showText; 
  }
}
