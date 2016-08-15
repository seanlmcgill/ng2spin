import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpinnerService, SpinnerComponent } from './spinner/index';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ SpinnerComponent, AppComponent ],
    providers: [ SpinnerService ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {
}
