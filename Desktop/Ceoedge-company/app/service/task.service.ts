import { Injectable } from '@angular/core';
import {TaskResponse} from '../domain/task.response';
import {Task} from '../domain/task';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {TaskRequest} from '../domain/task.request';
import {REST_URL} from './url.service';

@Injectable()

export class TaskService{

constructor(private http: Http) {}
gettaskdetails(role:string,
companyCode:string){
    

return this.http.get(REST_URL + '/fetchTasks?role='+ role + "&companyCode=" + companyCode).map((response: Response) =>{
    console.log (response.json());
    return <Task[]>response.json().taskDetailsList}
)


}
savetask(taskRequest : TaskRequest){
    return this.http.post(REST_URL + '/saveTask',taskRequest).map((response: Response) =>{
    console.log (response.json());
    }
)


}

}
