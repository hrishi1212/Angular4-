"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var dashboard_routes_1 = require("./dashboard.routes");
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var primeng_3 = require("primeng/primeng");
var primeng_4 = require("primeng/primeng");
var primeng_5 = require("primeng/primeng");
var primeng_6 = require("primeng/primeng");
var primeng_7 = require("primeng/primeng");
var primeng_8 = require("primeng/primeng");
var primeng_9 = require("primeng/primeng");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            primeng_1.DataTableModule,
            primeng_1.SharedModule,
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
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES)
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map