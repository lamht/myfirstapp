import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import {RealTimeService} from './realtime.service';
import { NGXLogger  } from 'ngx-logger';

@Component({
  //selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  //styleUrls: ['./realtime.component.css']
})
export class RealTimeComponent implements OnInit {

  private val : number = 10;
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

  private decrease(){
    this.val--;
    this.realTimeService.update(this.val);
  }
  private increase(){
    this.val++;
    this.realTimeService.update(this.val);
  }

}
