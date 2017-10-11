import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule, SpinnerService } from './shared';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SharedModule
  ],
  providers: [ SpinnerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
