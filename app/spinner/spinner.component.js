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
var spinner_service_1 = require('./spinner.service');
var SpinnerComponent = (function () {
    function SpinnerComponent(spinnerElement, spinnerService) {
        this.spinnerElement = spinnerElement;
        this.spinnerService = spinnerService;
        this.show = false;
        this.element = null;
        this.options = null;
        this.subscription = null;
        console.log('Spinner component created');
        console.log(Spinner);
        this.element = spinnerElement.nativeElement;
        this.options = {
            lines: 13,
            length: 21,
            width: 13,
            radius: 50,
            scale: 0.75,
            corners: 1,
            color: '#000',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 0.8,
            trail: 60,
            fps: 20,
            zIndex: 2e9,
            className: 'spinner',
            top: '50%',
            left: '50%',
            shadow: true,
            hwaccel: false,
            position: 'absolute' // Element positioning
        };
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('spinner.component - ngOnInit called');
        this.subscription = this.spinnerService.running.subscribe(function (show) {
            if (show) {
                _this.startSpinner();
            }
            else {
                _this.stopSpinner();
            }
        });
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SpinnerComponent.prototype.startSpinner = function () {
        this.show = true;
        SpinnerComponent.spinner = new Spinner(this.options).spin(this.element.firstChild);
    };
    SpinnerComponent.prototype.stopSpinner = function () {
        if (SpinnerComponent.spinner) {
            this.show = false;
            SpinnerComponent.spinner.stop();
        }
    };
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'ng2-spinner',
            templateUrl: './app/spinner/spinner.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, spinner_service_1.SpinnerService])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map