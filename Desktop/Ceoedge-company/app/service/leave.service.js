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
require("rxjs/add/operator/map");
var url_service_1 = require("./url.service");
var LeaveService = (function () {
    function LeaveService(http) {
        this.http = http;
    }
    LeaveService.prototype.getleavedetails = function (role, companyCode) {
        return this.http.get(url_service_1.REST_URL + '/fetchLeaves?role=' + role + "&companyCode=" + companyCode).map(function (response) {
            console.log(response.json());
            return response.json().collaboratorLeaveDetailsList;
        });
    };
    LeaveService.prototype.saveleave = function (leaveRequest) {
        return this.http.post(url_service_1.REST_URL + '/saveLeave', leaveRequest).map(function (response) {
            console.log(response.json());
        });
    };
    return LeaveService;
}());
LeaveService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LeaveService);
exports.LeaveService = LeaveService;
//# sourceMappingURL=leave.service.js.map