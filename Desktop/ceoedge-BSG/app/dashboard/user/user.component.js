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
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
var primeng_1 = require("primeng/primeng");
//services
var company_service_1 = require("../../service/company.service");
var company_1 = require("../../domain/company");
var company_response_1 = require("../../domain/company.response");
var company_request_1 = require("../../domain/company.request");
var UserComponent = (function () {
    function UserComponent(confirmationService, _com) {
        this.confirmationService = confirmationService;
        this._com = _com;
        this.company = new company_1.Company();
        this.companyRequest = new company_request_1.SubscribercoRequest();
        this.companyResponse = new company_response_1.SubscribercoResponse();
        this.selectedCompanyRequest = new company_request_1.SubscribercoRequest();
        this.msgs = [];
        this.msgs1 = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadallcompany();
    };
    UserComponent.prototype.showDialogToAdd = function () {
        this.newCompany = true;
        this.companyRequest = new company_request_1.SubscribercoRequest();
        this.displayDialog = true;
    };
    UserComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Details Added Succesfully' });
    };
    UserComponent.prototype.hide = function () {
        this.msgs = [];
    };
    UserComponent.prototype.save = function () {
        this.savecomapny();
        this.showInfo();
        setTimeout(function () {
            location.reload();
        }, 2000);
        //save method here..
    };
    UserComponent.prototype.main = function () {
        this.save();
        this.displayDialog = false;
    };
    UserComponent.prototype.onRowSelect = function (event) {
        this.newCompany = false;
        this.cloneCompany(event.data);
        this.displayDialog = true;
    };
    UserComponent.prototype.cloneCompany = function (c) {
        this.companyRequest.status = c.status;
        this.companyRequest.address = c.address;
        this.companyRequest.ceoEmail = c.ceoEmail;
        this.companyRequest.ceoName = c.ceoName;
        this.companyRequest.ceoPhone = c.ceoPhone;
        this.companyRequest.name = c.name;
        this.companyRequest.managerEmail = c.managerEmail;
        this.companyRequest.managerName = c.managerName;
        this.companyRequest.managerPhone = c.managerPhone;
        this.companyRequest.minMonthBilling = c.minMonthBilling;
        this.companyRequest.perUserRate = c.perUserRate;
        this.companyRequest.managerPassword = c.managerPassword;
        this.companyRequest.ceoPassword = c.ceoPassword;
    };
    UserComponent.prototype.findSelectedColaboratorIndex = function () {
        return this.companys.indexOf(this.selectedCompany);
    };
    UserComponent.prototype.confirm2 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.msgs1 = [];
                _this.msgs1.push({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            }
        });
        this.displayDialog = false;
    };
    UserComponent.prototype.delete = function () {
        this._com.savecompany(this.companyRequest).subscribe(function (data) { alert("Succesfully Deleted Product details"); }, function (Error) { console.log("failed while adding product details"); });
        this.displayDialog = false;
        setTimeout(function () {
            location.reload();
        }, 2000);
    };
    UserComponent.prototype.delmain = function () {
        this.confirm2();
        this.delete();
        this.displayDialog = false;
    };
    UserComponent.prototype.loadallcompany = function () {
        var _this = this;
        this._com.getcompanydetails("ADMIN").subscribe(function (companys) { _this.companys = companys; });
        //console.log('here'+this.products[0].name);
        this.companys = this.companys;
    };
    UserComponent.prototype.savecomapny = function () {
        //local storage to be add
        this.companyRequest.adminRole = "ADMIN";
        this.companyRequest.operation = "add";
        this._com.savecompany(this.companyRequest).subscribe(function (data) { alert("Succesfully Added Product details"); }, function (Error) { console.log("failed while adding product details"); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-cmp',
        templateUrl: 'user.component.html',
        encapsulation: core_2.ViewEncapsulation.None,
        providers: [primeng_1.ConfirmationService, company_service_1.CompanyService, http_1.HttpModule],
        animations: [
            core_1.trigger('carduserprofile', [
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
                    core_1.animate('0.3s 0s ease-out'),
                ])
            ]),
            core_1.trigger('cardprofile', [
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
                    core_1.animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [primeng_1.ConfirmationService,
        company_service_1.CompanyService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map