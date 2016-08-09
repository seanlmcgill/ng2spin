/// <reference path="../typings/index.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './rxjs-operators';

import { AppComponent } from './app.component';

enableProdMode();
bootstrap(AppComponent);
