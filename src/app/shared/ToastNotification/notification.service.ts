import {Injectable} from '@angular/core'
import {Subject } from 'rxjs';

import {Notification} from './notification';
import { NGXLogger  } from 'ngx-logger';

@Injectable()
export class NotificationService {
    private _Notifications = new Subject<Notification>();
    constructor(private _logger: NGXLogger){   
        this._logger.debug("create NotificationService");
    }

    public noteAdded = this._Notifications.asObservable();

    public add(notification: Notification) {
        this._Notifications.next(notification);
    }
}
