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
var core_1 = require('@angular/core');
var spinner_component_1 = require('./spinner/spinner.component');
var spinner_service_1 = require('./spinner/spinner.service');
var AppComponent = (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.spinTimeout = 1;
    }
    AppComponent.prototype.spin = function (event) {
        var _this = this;
        var timeoutMs = this.spinTimeout * 1000;
        console.log("Showing spinner for " + timeoutMs + " milliseconds");
        event.preventDefault();
        this.spinnerService.show();
        setTimeout(function () {
            _this.spinnerService.hide();
        }, timeoutMs);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ng2spin-demo-app',
            templateUrl: 'app/app.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [spinner_component_1.SpinnerComponent]
        }), 
        __metadata('design:paramtypes', [spinner_service_1.SpinnerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
