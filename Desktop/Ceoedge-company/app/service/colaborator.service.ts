import { Injectable } from '@angular/core';
import {ColaboratorResponse} from '../domain/colaborator.response';
import {Colaborator} from '../domain/colaborator';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ColaboratorRequest} from '../domain/colaborator.request';
import {REST_URL} from './url.service';
@Injectable()

export class ColaboratorService{

constructor(private http: Http) {}
getcolaboratordetails(role:string,
companyCode:string){
    

return this.http.get(REST_URL + '/fetchCollaborators?role='+ role + "&companyCode=" + companyCode).map((response: Response) =>{
    console.log (response.json());
    return <Colaborator[]>response.json().collaboratorDetailsList}
    
)


}
savecolaborator(colaboratorRequest : ColaboratorRequest){
    return this.http.post(REST_URL + '/saveCollaborator',colaboratorRequest).map((response: Response) =>{
    console.log (response.json());
    }
)


}

}