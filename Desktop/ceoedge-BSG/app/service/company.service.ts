import { Injectable } from '@angular/core';
import {SubscribercoResponse} from '../domain/company.response';
import {Company} from '../domain/company';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {SubscribercoRequest} from '../domain/company.request';
import {REST_URL} from './url.service';
@Injectable()

export class CompanyService{

constructor(private http: Http) {}
getcompanydetails(role:string){
    

return this.http.get(REST_URL + '/fetchBsgSubscribersList?role='+ role).map((response: Response) =>{
    console.log (response.json());
    return <Company[]>response.json().subscriberCoDetailsList}
)


}
savecompany(companyRequest : SubscribercoRequest){
    return this.http.post(REST_URL + '/saveSubscriberCo',companyRequest).map((response: Response) =>{
    console.log (response.json());
    }
)


}

}