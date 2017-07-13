import {Injectable} from '@angular/core'
import {Subject } from 'rxjs/Subject';

import {Notification} from './notification';
import { Logger } from "angular2-logger/core"; 

@Injectable()
export class NotificationService {
    private _Notifications = new Subject<Notification>();
    constructor(private _logger: Logger){   
        this._logger.debug("create NotificationService");
    }

    public noteAdded = this._Notifications.asObservable();

    public add(notification: Notification) {
        this._Notifications.next(notification);
    }
}