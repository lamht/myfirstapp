import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {RealTimeComponent} from './realtime.component';
import {RealTimeRoutingModule} from './realtime-routing.module';
import {RealTimeService} from './realtime.service';
import { Logger } from "angular2-logger/core"; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RealTimeRoutingModule
    ],
    declarations: [
        RealTimeComponent,
    ],
    providers: [
        RealTimeService,
    ]
    })

export class RealTimeModule {
    constructor(private _logger: Logger){
        this._logger.debug("create RealTimeModule");
    }
}