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
var login_service_1 = require("../service/login.service");
var router_1 = require("@angular/router");
var login_request_1 = require("../domain/login.request");
var colaborator_1 = require("../domain/colaborator");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(authlogin, router, _login, fb) {
        this.authlogin = authlogin;
        this.router = router;
        this._login = _login;
        this.fb = fb;
        this.loginRequest = new login_request_1.LoginRequest();
        this.colaborator = new colaborator_1.Colaborator();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var login = localStorage.getItem("login");
        if (login === 'true') {
            //this.router.navigate(["/dashboard"]);
        }
    };
    LoginComponent.prototype.savelogin = function () {
        var _this = this;
        this._login.saveLogin(this.loginRequest).subscribe(function (data) { _this.colaborator = data; });
        if (localStorage.getItem("login") !== 'true') {
            console.log("succesfull login");
        }
        setTimeout(function () {
            location.reload();
        }, 2000);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/login/login.component.html',
        providers: [forms_1.FormBuilder, login_service_1.AdminService]
    }),
    __metadata("design:paramtypes", [login_service_1.AdminService,
        router_1.Router,
        login_service_1.AdminService,
        forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map