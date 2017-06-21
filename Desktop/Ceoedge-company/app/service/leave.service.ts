import { Injectable } from '@angular/core';
import {LeaveResponse} from '../domain/leave.response';
import {Leave} from '../domain/leave';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {LeaveRequest} from '../domain/leave.request';
import {REST_URL} from './url.service';

@Injectable()

export class LeaveService{

constructor(private http: Http) {}
getleavedetails(role:string,
companyCode:string){
    

return this.http.get(REST_URL + '/fetchLeaves?role='+ role + "&companyCode=" + companyCode).map((response: Response) =>{
    console.log (response.json());
    return <Leave[]>response.json().collaboratorLeaveDetailsList}
)


}
saveleave(leaveRequest : LeaveRequest){
    return this.http.post(REST_URL + '/saveLeave',leaveRequest).map((response: Response) =>{
    console.log (response.json());
    }
)


}

}
