import { Component,state,style,animate,transition, trigger, keyframes } from '@angular/core';
import { NgModule, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {DataTableModule,SharedModule,DialogModule,ConfirmDialogModule,ConfirmationService,Message} from 'primeng/primeng';
//services
import {ColaboratorService} from '../../service/colaborator.service';
import {Colaborator} from '../../domain/colaborator';
import {ColaboratorResponse} from '../../domain/colaborator.response';
import {ColaboratorRequest} from '../../domain/colaborator.request';
import {SelectItem} from 'primeng/primeng';
@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    encapsulation: ViewEncapsulation.None,
    providers:[ConfirmationService,ColaboratorService,HttpModule],
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
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

    export class UserComponent implements OnInit{ 
        
        constructor(
       private confirmationService: ConfirmationService,
       private _clo : ColaboratorService
     ) {

     }
     colaborator : Colaborator = new Colaborator();
     colaboratorRequest : ColaboratorRequest = new ColaboratorRequest();
     colaboratorResponse : ColaboratorResponse = new ColaboratorResponse();
     selectedColaboratorRequest : ColaboratorRequest = new ColaboratorRequest();
     displayDialog: boolean;
     selectedColaborator : Colaborator;
     newColaborator:boolean;
     collaborators : Colaborator[];


    ngOnInit() {
        this.loadallcolaborator();
    }

showDialogToAdd() {
        this.newColaborator = true;
        this.colaboratorRequest= new ColaboratorRequest();
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
        this.savecolaborator();
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
        this.newColaborator = false;
       
       this.cloneColaborator(event.data);
        this.displayDialog = true;
    }

cloneColaborator(c: Colaborator) {
    this.colaboratorRequest.adminRole=localStorage.getItem("adminrole");
    this.colaboratorRequest.companyCode=localStorage.getItem("companyCode");
    this.colaboratorRequest.operation="update";
      this.colaboratorRequest.role=c.role;
      
      this.colaboratorRequest.password=c.password;
      this.colaboratorRequest.name=c.name;
      this.colaboratorRequest.phoneNumber=c.phoneNumber;
      this.colaboratorRequest.role=c.role;
      this.colaboratorRequest.backup1=c.backup1;
      this.colaboratorRequest.backup2=c.backup2;
      
      this.colaboratorRequest.password=c.password;
      this.colaboratorRequest.status=c.status;
      this.colaboratorRequest.language=c.language;
    }
    findSelectedColaboratorIndex(): number {
        return this.collaborators.indexOf(this.selectedColaborator);
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
        
        this._clo.savecolaborator(this.colaboratorRequest).subscribe(data => {alert("Succesfully Deleted Product details")},Error => {console.log("failed while adding product details")})
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
loadallcolaborator(){
this._clo.getcolaboratordetails(localStorage.getItem("adminRole"),localStorage.getItem("companyCode")).subscribe((colaborators : any)=>{this.collaborators =colaborators;});

//console.log('here'+this.products[0].name);
this.collaborators=this.collaborators;

    
}
savecolaborator(){
  //local storage to be add
    
     this.colaboratorRequest.adminRole=localStorage.getItem("adminRole");
    this.colaboratorRequest.companyCode=localStorage.getItem("companyCode");
    this.colaboratorRequest.operation="add";

    this._clo.savecolaborator(this.colaboratorRequest).subscribe(data => {alert("Succesfully Added Product details")},Error => {alert("failed while adding product details")})
}


    }
