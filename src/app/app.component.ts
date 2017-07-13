import { Component } from '@angular/core';
 import { Logger } from "angular2-logger/core"; 

@Component({
  // tslint:disable-next-line
  selector: 'app',
  template: '<router-outlet></router-outlet><i class="loading  blue fa fa-spinner fa-spin fa-4x fa-fw margin-bottom" ></i>'
})
export class AppComponent {
  constructor(private _logger: Logger){
    this._logger.log("create AppComponent. Init my app");
  }
}