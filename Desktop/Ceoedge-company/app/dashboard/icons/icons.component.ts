import { Component, OnInit,trigger,transition,style,animate,group,state } from '@angular/core';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {SelectItem} from 'primeng/primeng';
import {DataTableModule,SharedModule,DialogModule,ConfirmDialogModule,ConfirmationService,Message,CalendarModule} from 'primeng/primeng';
//service
import {ReportService} from '../../service/report.service';
import {Report} from '../../domain/report';
import {ReportResponse} from '../../domain/report.response';

@Component({
    moduleId: module.id,
    selector: 'icons-cmp',
    templateUrl: 'icons.component.html',
    providers:[ConfirmationService,ReportService,HttpModule],
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
        ])
    ]
})

export class IconsComponent implements OnInit{
    constructor(
       private confirmationService: ConfirmationService,
       private _report : ReportService
     ) {

     }
     
report : Report= new Report();
reports : Report[];     
    ngOnInit() {
        this.loadreport();
    }
loadreport(){
this._report.getReportdetails(localStorage.getItem("adminRole"),localStorage.getItem("companyCode")).subscribe((reports : any)=>{this.reports =reports;});

//console.log('here'+this.products[0].name);
this.reports=this.reports;
    
}


 }
