import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core"; 

@Component({
  selector: 'app-dashboard',
  template: '<router-outlet></router-outlet>',
})
export class SimpleLayoutComponent implements OnInit {

  constructor(private _logger: Logger) { 
    this._logger.debug("create SimpleLayoutComponent");
  }

  ngOnInit(): void { }
}
