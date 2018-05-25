import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {MaterialComponent} from './material.component';
import {MaterialListComponent} from './material-list.component';
import {MaterialFormComponent} from './material-form.component';

import {MaterialRoutingModule} from './material-routing.module';

import { NotificationsComponents } from '../shared/ToastNotification/notification.component';
import {ModalPopupComponent  } from '../usable-component/modal-popup/modalpopup.component';

import {MaterialService} from './material.service'
import {ShareDataService} from './sharedata.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NGXLogger  } from 'ngx-logger';


@NgModule({
    imports: [
        CommonModule,
        MaterialRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
    ],
    declarations: [
        MaterialComponent,
        MaterialListComponent,
        MaterialFormComponent,
        ModalPopupComponent,
    ],
    providers: [
        MaterialService,
        ShareDataService,
    ]
    })

export class MaterialModule {
    constructor(private _logger: NGXLogger){
        this._logger.debug("create MaterialModule");
    }
}