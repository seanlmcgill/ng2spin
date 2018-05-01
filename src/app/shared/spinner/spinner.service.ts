import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpinnerService {
    private spinnerSubject = new BehaviorSubject<boolean>(false);

    constructor() {}

    get spinnerObservable() {
      return this.spinnerSubject.asObservable();
    }

    show() {
        this.spinnerSubject.next(true);
    }

    hide() {
        this.spinnerSubject.next(false);
    }
}
