import {Injectable} from "@angular/core";
import {Login} from "../domain/login";

import {LoginRequest} from '../domain/login.request';


import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {REST_URL} from './url.service';
@Injectable()
export class AdminService{

constructor(private http: Http) {}
saveLogin(loginRequest :LoginRequest){
    
return this.http.post(REST_URL + '/loginManager',LoginRequest).map((response: Response) =>{
    
    if(response.json().statusCode===1){
     
        localStorage.setItem("adminRole",response.json().collaboratorDetails.role+'');
        localStorage.setItem("companyCode",response.json().collaboratorDetails.companyCode+'');
        localStorage.setItem("login",'true');
        console.log (response.json().collaboratorDetails.id);
    }
    else{
        alert("Login Failed Invalid Email/Password");
    }

    }
)
}





}



