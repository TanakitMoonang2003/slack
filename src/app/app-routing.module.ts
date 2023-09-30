import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{DashboardComponent} from './dashboard/dashboard.component'
import { TableComponent } from './table/table.component';
import { EditpersonalComponent } from './editpersonal/editpersonal.component';


const routes: Routes = [
{
  path:'login',
  component: LoginComponent
},
{
 path:'register',
 component: RegisterComponent 
},
{
  path:'dashboard',
  component: DashboardComponent
 },
 {
  path:'table',
  component:TableComponent
 },
 {
  path:'editpersonal',
  component:EditpersonalComponent
 },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
