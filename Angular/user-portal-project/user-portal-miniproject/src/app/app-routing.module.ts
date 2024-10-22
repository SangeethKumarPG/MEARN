import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { authguardGuard } from './guards/authguard.guard';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent, canActivate:[authguardGuard]
  },
  {
    path:'employee', component:EmployeeListComponent, canActivate:[authguardGuard]
  },
  {
    path:'employee/add', component:EmployeeAddComponent, canActivate:[authguardGuard]
  },
  {
    path:'employee/edit/:id', component:EmployeeEditComponent,canActivate:[authguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
