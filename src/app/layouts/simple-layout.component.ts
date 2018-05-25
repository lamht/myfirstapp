import { Component, OnInit } from '@angular/core';
import { NGXLogger  } from 'ngx-logger';

@Component({
  selector: 'app-dashboard',
  template: '<router-outlet></router-outlet>',
})
export class SimpleLayoutComponent implements OnInit {

  constructor(private _logger: NGXLogger) { 
    this._logger.debug("create SimpleLayoutComponent");
  }

  ngOnInit(): void { }
}
