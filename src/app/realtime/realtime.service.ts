import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { NGXLogger  } from 'ngx-logger';

@Injectable()
export class RealTimeService {
   public realTimeVal : AngularFireObject<RealTimeData>;
   constructor(db: AngularFireDatabase, private _logger: NGXLogger) {
       this._logger.debug("create RealTimeService");
       this.realTimeVal = db.object('realtime');
       //this.update(10);
   }
    
   update(val){
    this.realTimeVal.set({"value" : val});
   }
}

export class RealTimeData{
    value : number = 10; 
}
