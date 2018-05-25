import {Injectable} from '@angular/core'
//import {Material} from './models/material.model'
import { NGXLogger  } from 'ngx-logger';


export class Notifiy {
    type: string;
    message: string
}

@Injectable()
export class ShareDataService {
    constructor(private _logger: NGXLogger){
        this._logger.debug("create ShareDataService");
    }
    public dataPassed : Notifiy = null;

    public SetData(type, msg) {
        var newMessage = new Notifiy();

        newMessage.type = type;
        newMessage.message = msg;
        this.dataPassed=newMessage;
    }
}