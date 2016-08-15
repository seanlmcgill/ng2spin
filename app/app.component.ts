import { Component, ViewEncapsulation } from '@angular/core';

import { SpinnerService, SpinnerComponent } from './spinner/index';


@Component({
    selector: 'ng2spin-demo-app',
    templateUrl: 'app/app.component.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ SpinnerComponent ]
})
export class AppComponent {

    private spinTimeout: number = 1;

    constructor(private spinnerService: SpinnerService) {
    }

    public spin(event: MouseEvent): void {
        let timeoutMs = this.spinTimeout * 1000;
        console.log(`Showing spinner for ${timeoutMs} milliseconds`);
        event.preventDefault();
        this.spinnerService.show();
        setTimeout(() => {
            this.spinnerService.hide();
        }, timeoutMs);
    }
}