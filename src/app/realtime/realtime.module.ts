import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {RealTimeComponent} from './realtime.component';
import {RealTimeRoutingModule} from './realtime-routing.module';
import {RealTimeService} from './realtime.service';
import { NGXLogger  } from 'ngx-logger';

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
    constructor(private _logger: NGXLogger){
        this._logger.debug("create RealTimeModule");
    }
}