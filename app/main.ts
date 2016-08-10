/// <reference path="../typings/index.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './rxjs-operators';

import { AppComponent } from './app.component';
import { SpinnerService } from './spinner/spinner.service';

enableProdMode();
bootstrap(AppComponent, [
    SpinnerService
]);
