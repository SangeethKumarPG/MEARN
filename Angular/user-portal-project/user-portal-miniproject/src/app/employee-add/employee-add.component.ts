import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employee:any={
    id:'',
    username:'',
    email:'',
    status:1,
  }
  clearFields(){
    this.employee={
      status:1
    }
  }
}
