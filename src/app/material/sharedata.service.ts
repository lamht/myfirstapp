import {Injectable} from '@angular/core'
//import {Material} from './models/material.model'
import { Logger } from "angular2-logger/core"; 


export class Notifiy {
    type: string;
    message: string
}

@Injectable()
export class ShareDataService {
    constructor(private _logger: Logger){
        this._logger.debug("create ShareDataService");
    }
    notify: Notifiy
    dataPassed = new Notifiy();
    SetData(type, msg) {
        var newMessage = new Notifiy();

        newMessage.type = type;
        newMessage.message = msg;
        this.dataPassed=newMessage;
    }
}