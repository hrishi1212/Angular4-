import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {SelectItem} from 'primeng/primeng';
import {DataTableModule,SharedModule,DialogModule,ConfirmDialogModule,ConfirmationService,Message,CalendarModule} from 'primeng/primeng';
//service
import {TaskService} from '../../service/task.service';
import {Task} from '../../domain/task';
import {TaskResponse} from '../../domain/task.response';
import {TaskRequest} from '../../domain/task.request';
@Component({
    moduleId: module.id,
    selector: 'table-cmp',
    templateUrl: 'table.component.html',
    encapsulation: ViewEncapsulation.None,
    providers:[ConfirmationService,TaskService,HttpModule],
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ]),
        trigger('cardtable2', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.25s ease-out')
                ])
        ])
    ]
})

export class TableComponent implements OnInit{
escalationtrigger: SelectItem[];
taskclassification:SelectItem[];
criticality:SelectItem[];
frequencyDay:SelectItem[];
selectedCity: string;
date7: string;
 constructor(
       private confirmationService: ConfirmationService,
       private _task : TaskService
     ) {
this.escalationtrigger=[];
this.escalationtrigger.push({label:'Select Escalation Trigger', value:null});
this.escalationtrigger.push({label:'YES', value:'YES'});
this.escalationtrigger.push({label:'NO', value:'NO'});

this.taskclassification=[];
this.taskclassification.push({label:'Select Task Classification', value:null});
this.taskclassification.push({label:'REVENUE', value:'REVENUE'});
this.taskclassification.push({label:'EXPENSE', value:'EXPENSE'});
this.taskclassification.push({label:'ASSET', value:'ASSET'});
this.taskclassification.push({label:'LIABILITY', value:'LIABILITY'});
this.taskclassification.push({label:'OFF BALANCE SHEET', value:'OFF BALANCE SHEET'});
this.taskclassification.push({label:'OTHERS', value:'OTHERS'});

this.criticality=[];
this.criticality.push({label:'Select Criticality Level ', value:null});
this.criticality.push({label:'5', value:'5'});
this.criticality.push({label:'4', value:'4'});
this.criticality.push({label:'3', value:'3'});
this.criticality.push({label:'2', value:'2'});
this.criticality.push({label:'1', value:'1'});


this.frequencyDay=[];
this.frequencyDay.push({label:'Select Repeat Days ', value:'0'});
this.frequencyDay.push({label:'1 Day', value:'1'});
this.frequencyDay.push({label:'2 Day', value:'2'});
this.frequencyDay.push({label:'7 Day', value:'7'});
     }
     task : Task = new Task();
     taskRequest : TaskRequest = new TaskRequest();
     taskResponse : TaskResponse = new TaskResponse();
     selectedTaskRequest : TaskRequest = new TaskRequest();
     displayDialog: boolean;
     selectedTask : Task;
     newTask:boolean;
     tasks : Task[];
     value: Date;

    ngOnInit() {
        this.loadalltask();
    }

showDialogToAdd() {
        this.newTask = true;
        this.taskRequest= new TaskRequest();
        this.displayDialog = true;
    }
msgs: Message[] = [];
showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Details Added Succesfully'});
        
    }
    hide() {
    this.msgs = [];
}
save() {
        this.savetask();
        this.showInfo();
        
        
//save method here..
    }
     main(){
        this.save();
       this.displayDialog=false;
    }

    onRowSelect(event) {
        this.newTask = false;
       
       this.cloneTask(event.data);
        this.displayDialog = true;
    }

cloneTask(c: Task) {
     this.taskRequest.taskId=c.taskId;
     this.taskRequest.owner=localStorage.getItem("role");
     this.taskRequest.autoEscalationTime=c.autoEscalationTime;
     this.taskRequest.checkAt=c.checkAt;
     this.taskRequest.companyCode=localStorage.getItem("companyCode");
     this.taskRequest.criticality=c.criticality;
     this.taskRequest.description=c.description;
     this.taskRequest.escalation1=c.escalation1;
     this.taskRequest.escalation1Time=c.escalation1Time;
     this.taskRequest.escalation2=c.escalation2;
     this.taskRequest.escalation2Time=c.escalation2Time;
     this.taskRequest.escalation3=c.escalation3;
     this.taskRequest.escalationTrigger=c.escalationTrigger;
     
     this.taskRequest.localLanguageDescription=c.localLanguageDescription;
     this.taskRequest.operation="update";
     this.taskRequest.primaryCollaborator=c.primaryCollaboratorName;
     this.taskRequest.reviewer1=c.reviewer1;
     this.taskRequest.reviewer2=c.reviewer2;
     this.taskRequest.startDateTime=c.startDateTime;
     this.taskRequest.taskClassification=c.taskClassification;
     this.taskRequest.taskName=c.taskName;
     this.taskRequest.localLanguageTaskName=c.localLanguageTaskName;
        this.taskRequest.escalationType=c.escalationType;

    }
    findSelectedColaboratorIndex(): number {
        return this.tasks.indexOf(this.selectedTask);
    }

msgs1: Message[] = [];
confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs1 = [];
                this.msgs1.push({severity:'info', summary:'Confirmed', detail:'Record deleted'});
            }
        });
       this.displayDialog = false;
    }

    delete() {


    this._task.savetask(this.taskRequest).subscribe(data => {alert("Succesfully Deleted Product details")},Error => {console.log("failed while adding product details")})
this.displayDialog=false;
setTimeout(function(){
location.reload();
        },2000);
    }  


delmain(){

        this.confirm2();
        this.delete();
this.displayDialog=false;
}
loadalltask(){
this._task.gettaskdetails("MANAGER","BSG1").subscribe((tasks : any)=>{this.tasks =tasks;});


this.tasks=this.tasks;
    
}
savetask(){
  //local storage to be add
    this.taskRequest.companyCode="BSG1";
    this.taskRequest.status="PENDING";
    this.taskRequest.adminRole="MANAGER";
    this.taskRequest.operation="add";
    alert("start date is " + this.taskRequest.startDateTime);
    this._task.savetask(this.taskRequest).subscribe(data => {alert("Succesfully Added Product details with")},Error => {console.log("failed while adding product details")})
}









 }
