import { Component, ViewEncapsulation } from '@angular/core';

import { SpinnerComponent } from './spinner';
import {SpinnerService} from "./spinner/spinner.service";

@Component({
    selector: 'ng2spin-demo-app',
    templateUrl: 'app/app.component.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ SpinnerComponent ]
})
export class AppComponent {

    constructor(private spinnerService: SpinnerService) {
    }

    public spin(event: MouseEvent): void {
        event.preventDefault();
        this.spinnerService.show();
        setTimeout(() => {
            this.spinnerService.hide();
        }, 3000);
    }
}