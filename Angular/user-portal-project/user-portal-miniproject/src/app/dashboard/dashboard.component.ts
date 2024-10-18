import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../services/employee-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  employeeCount:number = 0;
  selected:Date | null= new Date();
  constructor(private empService:EmployeeApiService) { }
  ngOnInit(): void {
    this.empService.getAllEmployeesApi().subscribe({
      next:(res:any)=>{
        this.employeeCount = res.length-1;

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
