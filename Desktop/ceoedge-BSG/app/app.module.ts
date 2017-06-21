import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
//primeng
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InplaceModule,PasswordModule,TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {SelectItem,CheckboxModule,PaginatorModule} from 'primeng/primeng';
import {MultiSelectModule,OrderListModule,DialogModule} from 'primeng/primeng';

@NgModule({
    imports:      [
        CommonModule,
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        DataTableModule,
        SharedModule,
        BrowserAnimationsModule,
        HttpModule,
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
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
