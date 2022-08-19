import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  [x: string]: any;
  model : any={};     
  ///errorMessage:string;

  constructor(private router:Router,private LoginService:LoginService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();
  }
 login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/home']);    
          debugger;    
        }    
        else{    
          this['errorMessage'] = data.Message;    
        }    
      },    
      error => {    
        this['errorMessage'] = error.message;    
      });    
  };    
 }     