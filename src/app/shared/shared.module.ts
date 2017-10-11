import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner';

@NgModule({
    imports: [ FormsModule ],
    declarations: [ SpinnerComponent ],
    exports:  [ FormsModule, SpinnerComponent ]
})
export class SharedModule {
}
