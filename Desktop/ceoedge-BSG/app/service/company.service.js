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
var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.getcompanydetails = function (role) {
        return this.http.get(url_service_1.REST_URL + '/fetchBsgSubscribersList?role=' + role).map(function (response) {
            console.log(response.json());
            return response.json().subscriberCoDetailsList;
        });
    };
    CompanyService.prototype.savecompany = function (companyRequest) {
        return this.http.post(url_service_1.REST_URL + '/saveSubscriberCo', companyRequest).map(function (response) {
            console.log(response.json());
        });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map