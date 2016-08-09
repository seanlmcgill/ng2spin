import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class SpinnerService {
    running: Observable<boolean>;
    private spinnerObserver: Observer<boolean>;

    constructor() {
        this.running = new Observable<boolean>(observer => {
                this.spinnerObserver = observer;
            }
        ).share();
    }

    show() {
        if (this.spinnerObserver) {
            this.spinnerObserver.next(true);
        }
    }

    hide() {
        if (this.spinnerObserver) {
            this.spinnerObserver.next(false);
        }
    }
}
