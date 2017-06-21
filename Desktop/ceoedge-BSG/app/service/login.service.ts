import {Injectable} from "@angular/core";
import {Admin} from "../domain/login";

import {AdminRequest} from '../domain/login.request';


import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {REST_URL} from './url.service';
@Injectable()
export class AdminService{

constructor(private http: Http) {}
saveLogin(adminRequest :AdminRequest){
    
return this.http.post(REST_URL + '/loginAdmin',adminRequest).map((response: Response) =>{
    
    if(response.json().statusCode===1){
     
        localStorage.setItem("userId",response.json().collaboratorDetails.userId+'');
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



