import { Component,state,style,animate,transition, trigger, keyframes } from '@angular/core';
import { NgModule, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {DataTableModule,SharedModule,DialogModule,ConfirmDialogModule,ConfirmationService,Message} from 'primeng/primeng';
//services
import {CompanyService} from '../../service/company.service';
import {Company} from '../../domain/company';
import {SubscribercoResponse} from '../../domain/company.response';
import {SubscribercoRequest} from '../../domain/company.request';
@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    encapsulation: ViewEncapsulation.None,
    providers:[ConfirmationService,CompanyService,HttpModule],
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
       private _com : CompanyService
     ) {

     }
     company : Company = new Company();
     companyRequest : SubscribercoRequest = new SubscribercoRequest();
     companyResponse : SubscribercoResponse = new SubscribercoResponse();
     selectedCompanyRequest : SubscribercoRequest = new SubscribercoRequest();
     displayDialog: boolean;
     selectedCompany : Company;
     newCompany:boolean;
     companys : Company[];


    ngOnInit() {
        this.loadallcompany();
    }

showDialogToAdd() {
        this.newCompany = true;
        this.companyRequest= new SubscribercoRequest();
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
        this.savecomapny();
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
        this.newCompany = false;
       
       this.cloneCompany(event.data);
        this.displayDialog = true;
    }

cloneCompany(c: Company) {
      this.companyRequest.status=c.status;
      this.companyRequest.address=c.address;
      this.companyRequest.ceoEmail=c.ceoEmail;
      this.companyRequest.ceoName=c.ceoName;
      this.companyRequest.ceoPhone=c.ceoPhone;
      this.companyRequest.name=c.name;
      this.companyRequest.managerEmail=c.managerEmail;
      this.companyRequest.managerName=c.managerName;
      this.companyRequest.managerPhone=c.managerPhone;
      this.companyRequest.minMonthBilling=c.minMonthBilling;
      this.companyRequest.perUserRate=c.perUserRate;
      this.companyRequest.managerPassword=c.managerPassword;
      this.companyRequest.ceoPassword=c.ceoPassword;
    }
    findSelectedColaboratorIndex(): number {
        return this.companys.indexOf(this.selectedCompany);
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
        
    
    

    this._com.savecompany(this.companyRequest).subscribe(data => {alert("Succesfully Deleted Product details")},Error => {console.log("failed while adding product details")})
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
loadallcompany(){
this._com.getcompanydetails("ADMIN").subscribe((companys : any)=>{this.companys =companys;});

//console.log('here'+this.products[0].name);
this.companys=this.companys;
    
}
savecomapny(){
  //local storage to be add
    
    this.companyRequest.adminRole="ADMIN";
    this.companyRequest.operation="add";
    this._com.savecompany(this.companyRequest).subscribe(data => {alert("Succesfully Added Product details")},Error => {console.log("failed while adding product details")})
}


    }
