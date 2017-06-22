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
//service
var task_service_1 = require("../../service/task.service");
var task_1 = require("../../domain/task");
var task_response_1 = require("../../domain/task.response");
var task_request_1 = require("../../domain/task.request");
var colaborator_service_1 = require("../../service/colaborator.service");
var TableComponent = (function () {
    function TableComponent(confirmationService, _task, _clo) {
        this.confirmationService = confirmationService;
        this._task = _task;
        this._clo = _clo;
        this.task = new task_1.Task();
        this.taskRequest = new task_request_1.TaskRequest();
        this.taskResponse = new task_response_1.TaskResponse();
        this.selectedTaskRequest = new task_request_1.TaskRequest();
        this.msgs = [];
        this.msgs1 = [];
        this.selectedPrimaryCollaborator = null;
        this.selectedAutoescallation1 = null;
        this.selectedAutoescallation2 = null;
        this.selectedAutoescallation3 = null;
        this.selectedReview1 = null;
        this.selectedReview2 = null;
        this.escalationtrigger = [];
        this.escalationtrigger.push({ label: 'Select Escalation Trigger', value: null });
        this.escalationtrigger.push({ label: 'YES', value: 'YES' });
        this.escalationtrigger.push({ label: 'NO', value: 'NO' });
        this.taskclassification = [];
        this.taskclassification.push({ label: 'Select Task Classification', value: null });
        this.taskclassification.push({ label: 'REVENUE', value: 'REVENUE' });
        this.taskclassification.push({ label: 'EXPENSE', value: 'EXPENSE' });
        this.taskclassification.push({ label: 'ASSET', value: 'ASSET' });
        this.taskclassification.push({ label: 'LIABILITY', value: 'LIABILITY' });
        this.taskclassification.push({ label: 'OFF BALANCE SHEET', value: 'OFF BALANCE SHEET' });
        this.taskclassification.push({ label: 'MOMENTUM', value: 'MOMENTUM' });
        this.criticality = [];
        this.criticality.push({ label: 'Select Criticality Level ', value: null });
        this.criticality.push({ label: '5', value: '5' });
        this.criticality.push({ label: '4', value: '4' });
        this.criticality.push({ label: '3', value: '3' });
        this.criticality.push({ label: '2', value: '2' });
        this.criticality.push({ label: '1', value: '1' });
        this.frequencyDay = [];
        this.frequencyDay.push({ label: 'Select Repeat Days ', value: '0' });
        this.frequencyDay.push({ label: '1 Day', value: '1' });
        this.frequencyDay.push({ label: '2 Day', value: '2' });
        this.frequencyDay.push({ label: '7 Day', value: '7' });
    }
    TableComponent.prototype.ngOnInit = function () {
        this.loadalltask();
        this.loadallcolaborator();
    };
    TableComponent.prototype.showDialogToAdd = function () {
        this.newTask = true;
        this.taskRequest = new task_request_1.TaskRequest();
        this.displayDialog = true;
    };
    TableComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Details Added Succesfully' });
    };
    TableComponent.prototype.hide = function () {
        this.msgs = [];
    };
    TableComponent.prototype.save = function () {
        this.savetask();
        this.showInfo();
        //save method here..
    };
    TableComponent.prototype.main = function () {
        this.save();
        this.displayDialog = false;
    };
    TableComponent.prototype.onRowSelect = function (event) {
        this.newTask = false;
        this.cloneTask(event.data);
        this.displayDialog = true;
    };
    TableComponent.prototype.cloneTask = function (c) {
        this.taskRequest.taskId = c.taskId;
        this.taskRequest.owner = localStorage.getItem("adminRole");
        this.taskRequest.autoEscalationTime = c.autoEscalationTime;
        this.taskRequest.checkAt = c.checkAt;
        this.taskRequest.companyCode = localStorage.getItem("companyCode");
        this.taskRequest.criticality = c.criticality;
        this.taskRequest.description = c.description;
        this.taskRequest.escalation1 = c.escalation1;
        this.taskRequest.escalation1Time = c.escalation1Time;
        this.taskRequest.escalation2 = c.escalation2;
        this.taskRequest.escalation2Time = c.escalation2Time;
        this.taskRequest.escalation3 = c.escalation3;
        this.taskRequest.escalationTrigger = c.escalationTrigger;
        this.taskRequest.localLanguageDescription = c.localLanguageDescription;
        this.taskRequest.operation = "update";
        this.taskRequest.primaryCollaborator = c.primaryCollaboratorName;
        this.taskRequest.reviewer1 = c.reviewer1;
        this.taskRequest.reviewer2 = c.reviewer2;
        this.taskRequest.startDateTime = c.startDateTime;
        this.taskRequest.taskClassification = c.taskClassification;
        this.taskRequest.taskName = c.taskName;
        this.taskRequest.localLanguageTaskName = c.localLanguageTaskName;
        this.taskRequest.escalationType = c.escalationType;
    };
    TableComponent.prototype.findSelectedColaboratorIndex = function () {
        return this.tasks.indexOf(this.selectedTask);
    };
    TableComponent.prototype.confirm2 = function () {
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
    TableComponent.prototype.delete = function () {
        this._task.savetask(this.taskRequest).subscribe(function (data) { alert("Succesfully Deleted Product details"); }, function (Error) { console.log("failed while adding product details"); });
        this.displayDialog = false;
        setTimeout(function () {
            location.reload();
        }, 2000);
    };
    TableComponent.prototype.delmain = function () {
        this.confirm2();
        this.delete();
        this.displayDialog = false;
    };
    TableComponent.prototype.loadalltask = function () {
        var _this = this;
        this._task.gettaskdetails(localStorage.getItem("adminRole"), localStorage.getItem("companyCode")).subscribe(function (tasks) { _this.tasks = tasks; });
        this.tasks = this.tasks;
    };
    TableComponent.prototype.savetask = function () {
        //local storage to be add
        this.taskRequest.companyCode = localStorage.getItem("companyCode");
        this.taskRequest.status = "PENDING";
        this.taskRequest.adminRole = localStorage.getItem("adminRole");
        this.taskRequest.operation = "add";
        this.taskRequest.primaryEscalationDateTime = this.taskRequest.autoEscalationTime;
        this.taskRequest.actualEscalation1DateTime = this.taskRequest.escalation1Time;
        this.taskRequest.actualEscalation2DateTime = this.taskRequest.escalation2Time;
        this._task.savetask(this.taskRequest).subscribe(function (data) { alert("Succesfully Added Product details with"); }, function (Error) { console.log("failed while adding product details"); });
    };
    TableComponent.prototype.onselect = function () {
        this.taskRequest.primaryCollaborator = this.selectedPrimaryCollaborator.role;
    };
    TableComponent.prototype.onselectAE1 = function () {
        this.taskRequest.escalation1 = this.selectedAutoescallation1.role;
    };
    TableComponent.prototype.onselectAE2 = function () {
        this.taskRequest.escalation2 = this.selectedAutoescallation2.role;
    };
    TableComponent.prototype.onselectAE3 = function () {
        this.taskRequest.escalation3 = this.selectedAutoescallation3.role;
    };
    TableComponent.prototype.onselectRE1 = function () {
        this.taskRequest.reviewer1 = this.selectedReview1.role;
    };
    TableComponent.prototype.onselectRE2 = function () {
        this.taskRequest.reviewer2 = this.selectedReview1.role;
    };
    TableComponent.prototype.loadallcolaborator = function () {
        var _this = this;
        this._clo.getcolaboratordetails(localStorage.getItem("adminRole"), localStorage.getItem("companyCode")).subscribe(function (colaborators) { _this.collaborators = colaborators; });
        //console.log('here'+this.products[0].name);
        this.collaborators = this.collaborators;
    };
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'table-cmp',
        templateUrl: 'table.component.html',
        encapsulation: core_2.ViewEncapsulation.None,
        providers: [primeng_1.ConfirmationService, task_service_1.TaskService, http_1.HttpModule, colaborator_service_1.ColaboratorService],
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
            ]),
            core_1.trigger('cardtable2', [
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
        task_service_1.TaskService,
        colaborator_service_1.ColaboratorService])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map