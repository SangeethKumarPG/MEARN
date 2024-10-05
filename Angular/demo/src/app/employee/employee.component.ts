import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  name = 'Sean';
  imagePath = "https://imgd.aeplcdn.com/642x336/ec/6d/C4/14571/img/m/Porsche-Carrera-GT-Exterior-32163_ol.jpg?t=200007770&t=200007770&q=80";
  showName(count:number){
    alert("Hello"+" "+count);
  }
}
