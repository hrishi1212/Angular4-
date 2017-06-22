import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule,SharedModule,DialogModule,ConfirmDialogModule,ConfirmationService,Message} from 'primeng/primeng';
//services
import {LeaveService} from '../../service/leave.service';
import {Leave} from '../../domain/leave';
import {LeaveResponse} from '../../domain/leave.response';
import {LeaveRequest} from '../../domain/leave.request';
@Component({
    moduleId: module.id,
    selector: 'typography-cmp',
    templateUrl: 'typography.component.html',
    encapsulation: ViewEncapsulation.None,
    providers:[ConfirmationService,LeaveService,HttpModule],
    animations: [
        trigger('cardtypography', [
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                    animate('0.3s 0s ease-out', style({opacity: 1,
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform':'translate3D(0px, 0px, 0px)',
                        transform:'translate3D(0px, 0px, 0px)',
                    }),)
                ])
        ])
    ]
})

export class TypographyComponent implements OnInit{
 constructor(
       private confirmationService: ConfirmationService,
       private _leave : LeaveService
     ) {

     }
     leave : Leave = new Leave();
     leaveRequest : LeaveRequest = new LeaveRequest();
     leaveResponse : LeaveResponse = new LeaveResponse();
     selectedLeaveRequest : LeaveRequest = new LeaveRequest();
     displayDialog: boolean;
     selectedLeave : Leave;
     newLeave:boolean;
     leaves : Leave[];

    ngOnInit() {
        this.loadallleave();
    }
    showDialogToAdd() {
        this.newLeave = true;
        this.leaveRequest= new LeaveRequest();
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
        this.saveleave();
        this.showInfo();
        setTimeout(function(){
location.reload();
        },2000);
        
//save method here..
    }
     main(){
        this.save();
       this.displayDialog=false;
    }

    onRowSelect(event) {
        this.newLeave = false;
       
       this.cloneLeave(event.data);
        this.displayDialog = true;
    }

cloneLeave(c: Leave) {
    
    this.leaveRequest.adminRole=localStorage.getItem("adminRole");
    this.leaveRequest.companyCode=localStorage.getItem("companyCode");
    this.leaveRequest.operation="update";
      this.leaveRequest.startDate=c.startDate;
      this.leaveRequest.endDate=c.endDate;
      this.leaveRequest.role=c.role;
    }
    findSelectedColaboratorIndex(): number {
        return this.leaves.indexOf(this.selectedLeave);
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
        
    
    

    this._leave.saveleave(this.leaveRequest).subscribe(data => {alert("Succesfully Deleted Product details")},Error => {console.log("failed while adding product details")})
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
loadallleave(){
this._leave.getleavedetails(localStorage.getItem("adminRole"),localStorage.getItem("companyCode")).subscribe((leaves : any)=>{this.leaves =leaves;});

//console.log('here'+this.products[0].name);
this.leaves=this.leaves;
    
}
saveleave(){
  //local storage to be add
    this.leaveRequest.adminRole=localStorage.getItem("adminRole");
    this.leaveRequest.companyCode=localStorage.getItem("companyCode");
    this.leaveRequest.operation="add";
    

    this._leave.saveleave(this.leaveRequest).subscribe(data => {alert("Succesfully Added Product details")},Error => {console.log("failed while adding product details")})
}


    }
 
