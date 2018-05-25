import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { NGXLogger  } from 'ngx-logger';

@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [
    ]
    })

export class HomeModule {
    constructor(private _logger: NGXLogger){
        this._logger.debug("create HomeModule");
    }
}