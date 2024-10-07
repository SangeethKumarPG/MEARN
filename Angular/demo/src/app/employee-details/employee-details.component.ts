import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  getUserName(data:any){
    console.log(data.target.value);
  }
  getEmail(data:any){
    console.log(data.target.value);
  }

  getLocation(location:any){
    alert(location.value)
  }
}
