import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpinnerService, SpinnerComponent } from './spinner';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, SpinnerComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ SpinnerService ]
})
export class AppModule { }