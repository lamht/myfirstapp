import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Logger } from "angular2-logger/core"; 

@Injectable()
export class RealTimeService {
   public realTimeVal : FirebaseObjectObservable<RealTimeData>;
   constructor(db: AngularFireDatabase, afAuth: AngularFireAuth, private _logger: Logger) {
       this._logger.log("create RealTimeService");
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
