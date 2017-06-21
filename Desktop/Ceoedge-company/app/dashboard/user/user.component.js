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
var colaborator_service_1 = require("../../service/colaborator.service");
var colaborator_1 = require("../../domain/colaborator");
var colaborator_response_1 = require("../../domain/colaborator.response");
var colaborator_request_1 = require("../../domain/colaborator.request");
var UserComponent = (function () {
    function UserComponent(confirmationService, _clo) {
        this.confirmationService = confirmationService;
        this._clo = _clo;
        this.colaborator = new colaborator_1.Colaborator();
        this.colaboratorRequest = new colaborator_request_1.ColaboratorRequest();
        this.colaboratorResponse = new colaborator_response_1.ColaboratorResponse();
        this.selectedColaboratorRequest = new colaborator_request_1.ColaboratorRequest();
        this.msgs = [];
        this.msgs1 = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadallcolaborator();
    };
    UserComponent.prototype.showDialogToAdd = function () {
        this.newColaborator = true;
        this.colaboratorRequest = new colaborator_request_1.ColaboratorRequest();
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
        this.savecolaborator();
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
        this.newColaborator = false;
        this.cloneColaborator(event.data);
        this.displayDialog = true;
    };
    UserComponent.prototype.cloneColaborator = function (c) {
        this.colaboratorRequest.adminRole = localStorage.getItem("role");
        this.colaboratorRequest.companyCode = localStorage.getItem("companyCode");
        this.colaboratorRequest.operation = "update";
        this.colaboratorRequest.role = c.role;
        this.colaboratorRequest.password = c.password;
        this.colaboratorRequest.name = c.name;
        this.colaboratorRequest.phoneNumber = c.phoneNumber;
        this.colaboratorRequest.role = c.role;
        this.colaboratorRequest.backup1 = c.backup1;
        this.colaboratorRequest.backup2 = c.backup2;
        this.colaboratorRequest.password = c.password;
        this.colaboratorRequest.status = c.status;
        this.colaboratorRequest.language = c.language;
    };
    UserComponent.prototype.findSelectedColaboratorIndex = function () {
        return this.collaborators.indexOf(this.selectedColaborator);
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
        this._clo.savecolaborator(this.colaboratorRequest).subscribe(function (data) { alert("Succesfully Deleted Product details"); }, function (Error) { console.log("failed while adding product details"); });
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
    UserComponent.prototype.loadallcolaborator = function () {
        var _this = this;
        this._clo.getcolaboratordetails("MANAGER", "BSG1").subscribe(function (colaborators) { _this.collaborators = colaborators; });
        //console.log('here'+this.products[0].name);
        this.collaborators = this.collaborators;
    };
    UserComponent.prototype.savecolaborator = function () {
        //local storage to be add
        this.colaboratorRequest.adminRole = "MANAGER";
        this.colaboratorRequest.companyCode = "BSG1";
        this.colaboratorRequest.operation = "add";
        this._clo.savecolaborator(this.colaboratorRequest).subscribe(function (data) { alert("Succesfully Added Product details"); }, function (Error) { alert("failed while adding product details"); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-cmp',
        templateUrl: 'user.component.html',
        encapsulation: core_2.ViewEncapsulation.None,
        providers: [primeng_1.ConfirmationService, colaborator_service_1.ColaboratorService, http_1.HttpModule],
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
        colaborator_service_1.ColaboratorService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map