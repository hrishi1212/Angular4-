import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {Login} from '../domain/login';
import {AdminService} from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginRequest} from '../domain/login.request';
import {Colaborator} from '../domain/colaborator';
import {Validators,FormControl,FormGroup,FormBuilder,} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './app/login/login.component.html',
    providers:[FormBuilder,AdminService]
})

export class LoginComponent{
    
    userform: FormGroup;
    loginRequest :LoginRequest = new LoginRequest();
    colaborator :Colaborator = new Colaborator();
    private username:string;
    private password:string;
constructor (private authlogin : AdminService,
private router: Router,
private _login : AdminService,
private fb: FormBuilder){}
    ngOnInit(){

      var  login = localStorage.getItem("login");
      if(login==='true')
      {
          //this.router.navigate(["/dashboard"]);
      }

    }
     savelogin(){
        this._login.saveLogin(this.loginRequest).subscribe((data : any)=>{this.colaborator =data;})
       
if(localStorage.getItem("login") !== 'true'){
    console.log("succesfull login");
}
        setTimeout(function(){
location.reload();
        },2000);
        
}
    
}
