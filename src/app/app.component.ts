import { Component } from '@angular/core';
import { NGXLogger  } from 'ngx-logger';

@Component({
  // tslint:disable-next-line
  selector: 'app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private _logger: NGXLogger){
    this._logger.debug("create AppComponent. Init my app");
  }
}