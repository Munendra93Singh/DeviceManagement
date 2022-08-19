import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptbaseComponent } from './deptbase/deptbase.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'Department', component : DeptbaseComponent},
  {path: 'login' , component :SignInComponent}

];
screen
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
