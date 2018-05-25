import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NGXLogger  } from 'ngx-logger';

@Injectable()
export class RealTimeService {
   public realTimeVal : AngularFireObject<RealTimeData>;
   constructor(db: AngularFireDatabase, afAuth: AngularFireAuth, private _logger: NGXLogger) {
       this._logger.debug("create RealTimeService");
       this.realTimeVal = db.object('realtime');
       afAuth.authState;
       //this.update(10);
   }
    
   update(val){
    this.realTimeVal.set({"value" : val});
   }
}

export class RealTimeData{
    value : number = 10; 
}
