import { Component } from '@angular/core';

import { SpinnerService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private spinTimeout = 1;

  constructor(private spinnerService: SpinnerService) {
  }

  public spin(event: MouseEvent): void {
      const timeoutMs = this.spinTimeout * 1000;
      console.log(`Showing spinner for ${timeoutMs} milliseconds`);
      event.preventDefault();
      this.spinnerService.show();
      setTimeout(() => {
          this.spinnerService.hide();
      }, timeoutMs);
  }
}
