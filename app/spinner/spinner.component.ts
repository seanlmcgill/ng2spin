import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from './spinner.service';

declare var Spinner: any;

@Component({
   selector: 'ng2-spinner',
   templateUrl: './app/spinner/spinner.component.html'
})
export class SpinnerComponent implements OnInit, OnDestroy {

    static spinner: any;

    private show: boolean = false;
    private element: any = null;
    private options: any = null;
    private subscription: any = null;

    constructor(private spinnerElement: ElementRef,
                private spinnerService: SpinnerService) {
        this.element = spinnerElement.nativeElement;
        this.options = {
            lines: 13, // The number of lines to draw
            length: 21, // The length of each line
            width: 13, // The line thickness
            radius: 50, // The radius of the inner circle
            scale: 0.75, // Scales overall size of the spinner
            corners: 1, // Corner roundness (0..1)
            color: '#fff', // #rgb or #rrggbb or array of colors
            opacity: 0.25, // Opacity of the lines
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            speed: 0.8, // Rounds per second
            trail: 60, // Afterglow percentage
            fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            className: 'spinner', // The CSS class to assign to the spinner
            top: '50%', // Top position relative to parent
            left: '50%', // Left position relative to parent
            shadow: true, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            position: 'absolute' // Element positioning
        };
    }

    ngOnInit() {
        console.log('spinner.component - ngOnInit called');
        this.subscription = this.spinnerService.running.subscribe( show => {
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
        SpinnerComponent.spinner = new Spinner(this.options).spin(this.element.firstChild);
    }

    stopSpinner() {
        if (SpinnerComponent.spinner) {
            this.show = false;
            SpinnerComponent.spinner.stop();
        }
    }
}
