import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../services/employee-api.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  allEmployeesList:any = [];
  searchKey : string = "";
  p:number = 1;
  ngOnInit(): void {
    console.log("Employee List Component Initialized");
    this.getAllEmployees();
  }
  constructor(private empService: EmployeeApiService) { }
  getAllEmployees() {
    return this.empService.getAllEmployeesApi().subscribe({
      next:(res)=>{
        // console.log(res);
        this.allEmployeesList = res;
        console.log(this.allEmployeesList);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  deleteEmployee(id:any){
    this.empService.deleteEmployeeApi(id).subscribe({
      next:(res)=>{
        this.getAllEmployees();
        Swal.fire({
          icon:'success',
          title: 'Employee Deleted Successfully',
          text: 'Employee has been deleted successfully from the database',
        })
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  sortById(){
    this.allEmployeesList.sort((a:any,b:any)=>a.id-b.id)
  }
  sortByName(){
    this.allEmployeesList.sort((a:any, b:any)=> a.username.localeCompare(b.username))
  }
  generatePDF(){
    const pdf = new jsPDF();
    let head = [['ID','Employee Name', 'Email', 'Status']];
    let body:any = [];
    this.allEmployeesList.forEach((emp:any)=>{
      body.push([emp.id, emp.username, emp.email, emp.status])
    })
    pdf.setFontSize(16);
    pdf.text('Employee Details',10,10);
    autoTable(pdf, {
      head: head,
      body:body
    })
    pdf.save('employee_list.pdf');
    pdf.output('dataurlnewwindow');
  }
}
