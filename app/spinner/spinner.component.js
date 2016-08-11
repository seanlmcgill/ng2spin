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
        this.subscription = null;
        this.lines = 12; // The number of lines to draw
        this.length = 20; // The length of each line
        this.width = 12; // The line thickness
        this.radius = 50; // The radius of the inner circle
        this.scale = 1.0; // Scales overall size of the spinner
        this.corners = 1; // Corner roundness (0..1)
        this.color = '#fff'; // #rgb or #rrggbb or array of colors
        this.opacity = 0.25; // Opacity of the lines
        this.rotate = 0; // The rotation offset
        this.direction = 1; // 1: clockwise, -1: counterclockwise
        this.speed = 0.8; // Rounds per second
        this.trail = 60; // Afterglow percentage
        this.fps = 20; // Frames per second when using setTimeout() as a fallback for CSS
        this.className = 'spinner'; // The CSS class to assign to the spinner
        this.top = '50%'; // Top position relative to parent
        this.left = '50%'; // Left position relative to parent
        this.shadow = true; // Whether to render a shadow
        this.hwaccel = true; // Whether to use hardware acceleration
        this.position = 'absolute'; // Element positioning
        this.element = spinnerElement.nativeElement;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        this.initSpinner();
        this.createServiceSubscription();
    };
    SpinnerComponent.prototype.initSpinner = function () {
        var options = {
            lines: this.lines,
            length: this.length,
            width: this.width,
            radius: this.radius,
            scale: this.scale,
            corners: this.corners,
            color: this.color,
            opacity: this.opacity,
            rotate: this.rotate,
            direction: this.direction,
            speed: this.speed,
            trail: this.trail,
            fps: this.fps,
            zIndex: 2e9,
            className: this.className,
            top: this.top,
            left: this.left,
            shadow: this.shadow,
            hwaccel: this.hwaccel,
            position: this.position
        };
        console.log('Creating spinner with options:');
        console.log(JSON.stringify((options)));
        this.spinner = new Spinner(options);
    };
    SpinnerComponent.prototype.createServiceSubscription = function () {
        var _this = this;
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
        this.spinner.spin(this.element.firstChild);
    };
    SpinnerComponent.prototype.stopSpinner = function () {
        this.show = false;
        this.spinner.stop();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "lines", void 0);
    __decorate([
        // The number of lines to draw
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "length", void 0);
    __decorate([
        // The length of each line
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "width", void 0);
    __decorate([
        // The line thickness
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "radius", void 0);
    __decorate([
        // The radius of the inner circle
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "scale", void 0);
    __decorate([
        // Scales overall size of the spinner
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "corners", void 0);
    __decorate([
        // Corner roundness (0..1)
        core_1.Input(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "color", void 0);
    __decorate([
        // #rgb or #rrggbb or array of colors
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "opacity", void 0);
    __decorate([
        // Opacity of the lines
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "rotate", void 0);
    __decorate([
        // The rotation offset
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "direction", void 0);
    __decorate([
        // 1: clockwise, -1: counterclockwise
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "speed", void 0);
    __decorate([
        // Rounds per second
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "trail", void 0);
    __decorate([
        // Afterglow percentage
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SpinnerComponent.prototype, "fps", void 0);
    __decorate([
        // Frames per second when using setTimeout() as a fallback for CSS
        core_1.Input(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "className", void 0);
    __decorate([
        // The CSS class to assign to the spinner
        core_1.Input(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "top", void 0);
    __decorate([
        // Top position relative to parent
        core_1.Input(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "left", void 0);
    __decorate([
        // Left position relative to parent
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "shadow", void 0);
    __decorate([
        // Whether to render a shadow
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "hwaccel", void 0);
    __decorate([
        // Whether to use hardware acceleration
        core_1.Input(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "position", void 0);
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