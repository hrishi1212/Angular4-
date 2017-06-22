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
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.saveLogin = function (loginRequest) {
        return this.http.post(url_service_1.REST_URL + '/loginManager', loginRequest).map(function (response) {
            if (response.json().statusCode === 1) {
                localStorage.setItem("adminRole", response.json().collaboratorDetails.role + '');
                localStorage.setItem("companyCode", response.json().collaboratorDetails.companyCode + '');
                localStorage.setItem("login", 'true');
                console.log(response.json().collaboratorDetails.role);
            }
            else {
                alert("Login Failed Invalid Email/Password");
            }
        });
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=login.service.js.map