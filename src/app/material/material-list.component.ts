import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {RouterLink, Router} from '@angular/router';
import {NgFor} from '@angular/common';


import {MaterialService} from './material.service'
import {Material} from './models/material.model'

import {ShareDataService} from './sharedata.service'
import globalMessage = require('../shared/global/global.messages')


import {NotificationService} from '../shared/ToastNotification/notification.service'
import { Notification } from '../shared/ToastNotification/notification';
import { ItemsService }     from '../shared/services/items.service';


@Component({
    templateUrl: './material-list.component.html',
    //providers: [MaterialService, NotificationService, ShareDataService, ItemsService],

})

export class MaterialListComponent implements OnInit, OnDestroy {
    materials: any[];
    showDialog: boolean;
    public visible: boolean;
    
    constructor(private _service: MaterialService,
        private _notify: NotificationService
        , private _sharedService: ShareDataService,
        private _router: Router,) {
    }
       
    objDeleteMaterial = new Material(); ///Object that is used for delete material

    ngOnInit() {
        if (this._sharedService.dataPassed) {
            this._notify.add(new Notification(this._sharedService.dataPassed.type, this._sharedService.dataPassed.message));
        }
        this.bindGrid()
    }

    notificate(){
        this._notify.add(new Notification(globalMessage.MessageType.Success, globalMessage.Messages.Success));
        this._notify.add(new Notification(globalMessage.MessageType.Error, globalMessage.Messages.Fail));
        this._notify.add(new Notification(globalMessage.MessageType.Info, globalMessage.Messages.Success));
        this._notify.add(new Notification(globalMessage.MessageType.Warning, globalMessage.Messages.Success));
    }

    bindGrid() { //// Bind material Grid
        this._service.getMaterials()
            .subscribe(materials => this.materials = materials)
    }

    confirmDelete() {
        this.showDialog = false; /// Close dialog
        this.deleteMaterial(this.objDeleteMaterial);
    }

    deleteMaterial(material) {
        var flag = 0;
        this._service.insertUpdateMaterial(material, true)
            .subscribe(data => {
                if (data == 1) {//// Procedure returns one if record deleted
                    this._notify.add(new Notification(globalMessage.MessageType.Success, globalMessage.Messages.Deleted));
                    this.bindGrid(); //// Bind grid again, issue :  still not found how to reload component
                }
            })
    }


    ngOnDestroy() {/// Clear Memory

        this._sharedService.dataPassed = null;
        this.objDeleteMaterial = null;
    }
    
}