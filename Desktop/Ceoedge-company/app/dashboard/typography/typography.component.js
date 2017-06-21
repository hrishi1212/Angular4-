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
var leave_service_1 = require("../../service/leave.service");
var leave_1 = require("../../domain/leave");
var leave_response_1 = require("../../domain/leave.response");
var leave_request_1 = require("../../domain/leave.request");
var TypographyComponent = (function () {
    function TypographyComponent(confirmationService, _leave) {
        this.confirmationService = confirmationService;
        this._leave = _leave;
        this.leave = new leave_1.Leave();
        this.leaveRequest = new leave_request_1.LeaveRequest();
        this.leaveResponse = new leave_response_1.LeaveResponse();
        this.selectedLeaveRequest = new leave_request_1.LeaveRequest();
        this.msgs = [];
        this.msgs1 = [];
    }
    TypographyComponent.prototype.ngOnInit = function () {
        this.loadallleave();
    };
    TypographyComponent.prototype.showDialogToAdd = function () {
        this.newLeave = true;
        this.leaveRequest = new leave_request_1.LeaveRequest();
        this.displayDialog = true;
    };
    TypographyComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Details Added Succesfully' });
    };
    TypographyComponent.prototype.hide = function () {
        this.msgs = [];
    };
    TypographyComponent.prototype.save = function () {
        this.saveleave();
        this.showInfo();
        setTimeout(function () {
            location.reload();
        }, 2000);
        //save method here..
    };
    TypographyComponent.prototype.main = function () {
        this.save();
        this.displayDialog = false;
    };
    TypographyComponent.prototype.onRowSelect = function (event) {
        this.newLeave = false;
        this.cloneLeave(event.data);
        this.displayDialog = true;
    };
    TypographyComponent.prototype.cloneLeave = function (c) {
        this.leaveRequest.adminRole = localStorage.getItem("role");
        this.leaveRequest.companyCode = localStorage.getItem("companyCode");
        this.leaveRequest.operation = "update";
        this.leaveRequest.startDate = c.startDate;
        this.leaveRequest.endDate = c.endDate;
        this.leaveRequest.role = c.role;
    };
    TypographyComponent.prototype.findSelectedColaboratorIndex = function () {
        return this.leaves.indexOf(this.selectedLeave);
    };
    TypographyComponent.prototype.confirm2 = function () {
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
    TypographyComponent.prototype.delete = function () {
        this._leave.saveleave(this.leaveRequest).subscribe(function (data) { alert("Succesfully Deleted Product details"); }, function (Error) { console.log("failed while adding product details"); });
        this.displayDialog = false;
        setTimeout(function () {
            location.reload();
        }, 2000);
    };
    TypographyComponent.prototype.delmain = function () {
        this.confirm2();
        this.delete();
        this.displayDialog = false;
    };
    TypographyComponent.prototype.loadallleave = function () {
        var _this = this;
        this._leave.getleavedetails("MANAGER", "BSG1").subscribe(function (leaves) { _this.leaves = leaves; });
        //console.log('here'+this.products[0].name);
        this.leaves = this.leaves;
    };
    TypographyComponent.prototype.saveleave = function () {
        //local storage to be add
        this.leaveRequest.adminRole = "MANAGER";
        this.leaveRequest.companyCode = "BSG1";
        this.leaveRequest.operation = "add";
        this._leave.saveleave(this.leaveRequest).subscribe(function (data) { alert("Succesfully Added Product details"); }, function (Error) { console.log("failed while adding product details"); });
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'typography-cmp',
        templateUrl: 'typography.component.html',
        encapsulation: core_2.ViewEncapsulation.None,
        providers: [primeng_1.ConfirmationService, leave_service_1.LeaveService, http_1.HttpModule],
        animations: [
            core_1.trigger('cardtypography', [
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0s ease-out', core_1.style({ opacity: 1,
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [primeng_1.ConfirmationService,
        leave_service_1.LeaveService])
], TypographyComponent);
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map