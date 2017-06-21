import { Injectable } from '@angular/core';
import {ReportResponse} from '../domain/report.response';
import {Report} from '../domain/report';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ReportRequest} from '../domain/report.request';
import {REST_URL} from './url.service';
import {EscalationReport} from '../domain/escalationReport';
import {RoleTaskReports} from '../domain/roleTaskReport';
@Injectable()

export class ReportService{

constructor(private http: Http) {}
getReportdetails(role:string){
    

return this.http.get(REST_URL + '/fetchAllTaskReport?role='+ role).map((response: Response) =>{
    console.log (response.json());
    return <Report[]>response.json().allTaskReportDetailsList}
)


}
savetask(reportRequest : ReportRequest){
    return this.http.post(REST_URL + '/saveProduct',reportRequest).map((response: Response) =>{
    console.log (response.json());
    }
)


}
getEscalationdetails(role:string){
    

return this.http.get(REST_URL + '/fetchAllTaskReport?role='+ role).map((response: Response) =>{
    console.log (response.json());
    return <EscalationReport[]>response.json().escalationTaskDetailsList}
)


}
getroletaskdetails(role:string){
    

return this.http.get(REST_URL + '/fetchAllTaskReport?role='+ role).map((response: Response) =>{
    console.log (response.json());
    return <RoleTaskReports[]>response.json().escalationTaskDetailsList}
)


}


}
