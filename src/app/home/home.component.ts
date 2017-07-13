import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core"; 

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _logger: Logger) { 
    this._logger.debug("create HomeComponent");
  }

  ngOnInit() {
  }

}
