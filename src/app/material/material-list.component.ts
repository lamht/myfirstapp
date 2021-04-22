import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {RouterLink, Router} from '@angular/router';


import {MaterialService} from './material.service'
import {Material} from './models/material.model'

import {ShareDataService} from './sharedata.service'


import {NotificationService} from '../shared/ToastNotification/notification.service'
import { Notification } from '../shared/ToastNotification/notification';
import { ItemsService }     from '../shared/services/items.service';
import { NGXLogger } from 'ngx-logger';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { Messages, MessageType } from '../shared/global/global.messages';

@Component({
    templateUrl: './material-list.component.html',
    //providers: [MaterialService, NotificationService, ShareDataService, ItemsService],

})

export class MaterialListComponent implements OnInit, OnDestroy {
    materials: any[];
    public visible: boolean;
    
    constructor(private _service: MaterialService,
        private _notify: NotificationService
        , private _sharedService: ShareDataService,
        private _router: Router, private _logger: NGXLogger,
        public dialog: MatDialog) {
    }
       
    objDeleteMaterial = new Material(); ///Object that is used for delete material

    ngOnInit() {
        if (this._sharedService.dataPassed) {
            this._notify.add(new Notification(this._sharedService.dataPassed.type, this._sharedService.dataPassed.message));
        }
        this.bindGrid()
    }

    notificate(){
        this._notify.add(new Notification(MessageType.Success, Messages.Success));
        this._notify.add(new Notification(MessageType.Error, Messages.Fail));
        this._notify.add(new Notification(MessageType.Info, Messages.Success));
        this._notify.add(new Notification(MessageType.Warning, Messages.Success));
    }

    bindGrid() { //// Bind material Grid
        this._service.getMaterials()
            .subscribe(materials => {
                this.materials = materials;               
                this._logger.debug(materials);
            });
    }

    confirmDialog(): void {
        const message = `Are you sure you want to delete this?`;

        const dialogData = new ConfirmDialogModel("Confirm Action", message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            let result = dialogResult;
            if (result === true) {
                this.deleteMaterial(this.objDeleteMaterial);
            }
        });
    }


    deleteMaterial(material: Material) {        
        var flag = 0;
        this._service.deleteItem(material.Id.toString())
            .subscribe(data => {
                if (data == 1) {//// Procedure returns one if record deleted
                    this._notify.add(new Notification(MessageType.Success, Messages.Deleted));
                    this.bindGrid(); //// Bind grid again, issue :  still not found how to reload component
                }
            })
    }


    ngOnDestroy() {/// Clear Memory

        this._sharedService.dataPassed = null;
        this.objDeleteMaterial = null;
    }
    
}