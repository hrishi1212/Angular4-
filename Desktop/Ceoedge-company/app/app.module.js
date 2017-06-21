"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var sidebar_module_1 = require("./sidebar/sidebar.module");
var footer_module_1 = require("./shared/footer/footer.module");
var navbar_module_1 = require("./shared/navbar/navbar.module");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var common_2 = require("@angular/common");
//primeng
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var primeng_3 = require("primeng/primeng");
var primeng_4 = require("primeng/primeng");
var primeng_5 = require("primeng/primeng");
var primeng_6 = require("primeng/primeng");
var primeng_7 = require("primeng/primeng");
var primeng_8 = require("primeng/primeng");
var primeng_9 = require("primeng/primeng");
var primeng_10 = require("primeng/primeng");
var login_component_1 = require("./login/login.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_2.CommonModule,
            platform_browser_1.BrowserModule,
            dashboard_module_1.DashboardModule,
            sidebar_module_1.SidebarModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            primeng_1.DataTableModule,
            primeng_1.SharedModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule,
            primeng_2.ConfirmDialogModule,
            primeng_3.FieldsetModule,
            primeng_4.DropdownModule,
            primeng_5.InplaceModule,
            primeng_5.PasswordModule,
            primeng_5.TabViewModule,
            primeng_6.InputTextModule,
            primeng_7.ButtonModule,
            primeng_8.CheckboxModule,
            primeng_8.PaginatorModule,
            primeng_9.MultiSelectModule,
            primeng_9.OrderListModule,
            primeng_9.DialogModule,
            forms_1.FormsModule,
            primeng_10.CalendarModule,
            router_1.RouterModule.forRoot([])
        ],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, login_component_1.LoginComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent,]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map