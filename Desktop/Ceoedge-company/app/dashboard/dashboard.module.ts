import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { ConfirmDialogModule } from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InplaceModule,PasswordModule,TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {SelectItem,CheckboxModule,PaginatorModule} from 'primeng/primeng';
import {MultiSelectModule,OrderListModule,DialogModule,CalendarModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        DataTableModule,
        SharedModule,
        ConfirmDialogModule,
        FieldsetModule,
        DropdownModule,
        InplaceModule,
        PasswordModule,
        TabViewModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        PaginatorModule,
        MultiSelectModule,
        OrderListModule,
        DialogModule,
        FormsModule,
        CalendarModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
