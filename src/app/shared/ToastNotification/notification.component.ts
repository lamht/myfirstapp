import {Component} from '@angular/core';

import {NotificationService} from './notification.service';
import {Notification} from './notification';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NGXLogger  } from 'ngx-logger';

@Component({
    selector: 'notifications',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css'],

})

export class NotificationsComponents {
    public _notes: Notification[];

    constructor(private _notifications: NotificationService, private router: Router, private _logger: NGXLogger) {
        this._logger.debug("create NotificationsComponents");
        this._notes = new Array<Notification>();

        _notifications.noteAdded.subscribe(note => {
            this._notes.push(note);

            setTimeout(() => { this.hide.bind(this)(note) }, 5000);
        });

        router.events.subscribe((val) => {
                if(val instanceof NavigationStart){
                    //console.log("NavigationStart");
                } else if(val instanceof NavigationEnd){
                    //console.log("NavigationEnd");
                    this.clearAll();
                }
        });
    }

    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }
    private clearAll(){
        this._notes.length = 0;
    }
}