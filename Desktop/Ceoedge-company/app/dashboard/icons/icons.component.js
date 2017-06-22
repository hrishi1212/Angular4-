"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var primeng_1 = require("primeng/primeng");
//service
var report_service_1 = require("../../service/report.service");
var report_1 = require("../../domain/report");
var IconsComponent = (function () {
    function IconsComponent(confirmationService, _report) {
        this.confirmationService = confirmationService;
        this._report = _report;
        this.report = new report_1.Report();
    }
    IconsComponent.prototype.ngOnInit = function () {
        this.loadreport();
    };
    IconsComponent.prototype.loadreport = function () {
        var _this = this;
        this._report.getReportdetails(localStorage.getItem("adminRole"), localStorage.getItem("companyCode")).subscribe(function (reports) { _this.reports = reports; });
        //console.log('here'+this.products[0].name);
        this.reports = this.reports;
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'icons-cmp',
        templateUrl: 'icons.component.html',
        providers: [primeng_1.ConfirmationService, report_service_1.ReportService, http_1.HttpModule],
        animations: [
            core_1.trigger('cardtable1', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [primeng_1.ConfirmationService,
        report_service_1.ReportService])
], IconsComponent);
exports.IconsComponent = IconsComponent;
//# sourceMappingURL=icons.component.js.map