import { Component, OnInit } from '@angular/core';
import {RealTimeService} from './realtime.service';
import { NGXLogger  } from 'ngx-logger';

@Component({
  //selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  //styleUrls: ['./realtime.component.css']
})
export class RealTimeComponent implements OnInit {

  public val : number = 10;
  constructor(private realTimeService: RealTimeService, private _logger: NGXLogger) {
    this._logger.debug("create RealTimeComponent");
    realTimeService.realTimeVal.valueChanges().subscribe(data =>{
      if(data != null && data.value != null){
        this._logger.debug(data);
        this.val = data.value;
      }
    })
  }

  ngOnInit() {
  }

  public decrease(){
    this.val--;
    this.realTimeService.update(this.val);
  }
  public increase(){
    this.val++;
    this.realTimeService.update(this.val);
  }

}
