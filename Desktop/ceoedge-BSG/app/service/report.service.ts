import { Injectable } from '@angular/core';
import {ReportResponse} from '../domain/report.response';
import {Report} from '../domain/report';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ReportRequest} from '../domain/report.request';
import {REST_URL} from './url.service';
@Injectable()

export class ReportService{

constructor(private http: Http) {}
getReportdetails(userId:number){
    

return this.http.get(REST_URL + '/fetchBsgReports?userId='+ userId).map((response: Response) =>{
    console.log (response.json());
    return <Report[]>response.json().subscriberCoDetailsList}
)


}
saveReport(reportRequest : ReportRequest){
    return this.http.post(REST_URL + '/saveProduct',reportRequest).map((response: Response) =>{
    console.log (response.json());
    }
)


}

}