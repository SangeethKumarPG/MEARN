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
  constructor(private homeRouter: Router, private dataService:DataService){
    this.email = this.dataService.email;
    this.password = this.dataService.password;
  }
  backToHome() {
    this.dataService.demoAlert();
    this.homeRouter.navigateByUrl('');
  }
}
