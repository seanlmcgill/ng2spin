import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subscription } from 'rxjs/Rx';

declare var Spinner: any;

@Component({
   selector: 'sjs-spinner',
   templateUrl: './app/spinner/spinner.component.html'
})
export class SpinnerComponent implements OnInit, OnDestroy {

    private spinner: any;
    private show: boolean = false;
    private element: any = null;
    private subscription: Subscription = null;

    @Input() lines: number = 12; // The number of lines to draw
    @Input() length: number = 20; // The length of each line
    @Input() width: number = 12; // The line thickness
    @Input() radius: number = 50; // The radius of the inner circle
    @Input() scale: number = 1.0; // Scales overall size of the spinner
    @Input() corners: number = 1; // Corner roundness (0..1)
    @Input() color: string = '#fff'; // #rgb or #rrggbb or array of colors
    @Input() opacity: number = 0.25; // Opacity of the lines
    @Input() rotate: number = 0; // The rotation offset
    @Input() direction: number = 1; // 1: clockwise, -1: counterclockwise
    @Input() speed: number = 0.8; // Rounds per second
    @Input() trail: number = 60; // Afterglow percentage
    @Input() fps: number = 20; // Frames per second when using setTimeout() as a fallback for CSS
    @Input() className: string = 'spinner'; // The CSS class to assign to the spinner
    @Input() top: string = '50%'; // Top position relative to parent
    @Input() left: string = '50%'; // Left position relative to parent
    @Input() shadow: boolean = true; // Whether to render a shadow
    @Input() hwaccel: boolean = true; // Whether to use hardware acceleration
    @Input() position: string = 'absolute'; // Element positioning

    constructor(private spinnerElement: ElementRef,
                private spinnerService: SpinnerService) {
        this.element = spinnerElement.nativeElement;
    }

    ngOnInit() {
       this.initSpinner();
       this.createServiceSubscription();
    }

    private initSpinner() {
        let options = {
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
            zIndex: 2e9, // Artificially high z-index to keep on top
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
    }

    private createServiceSubscription() {
        this.subscription = this.spinnerService.spinnerObservable.subscribe(show => {
            if (show) {
                this.startSpinner();
            } else {
                this.stopSpinner();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    startSpinner() {
        this.show = true;
        this.spinner.spin(this.element.firstChild);
    }

    stopSpinner() {
        this.show = false;
        this.spinner.stop();
    }
}
