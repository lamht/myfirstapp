import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ItemsService } from '../shared/services/items.service';
import { NGXLogger } from 'ngx-logger';

import {map, catchError } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Material } from './models/material.model';

//import globalVariables = require('../shared/global/global.variables')
//https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
@Injectable()
export class MaterialService implements OnInit {

    private basePath: string = '/materials';
    private indexPath: string = '/indexes/material';
    private materials;
    private curentIndex: number = 1;
    private itemService: ItemsService;

    constructor(private itemS: ItemsService, private db: AngularFireDatabase, private _logger: NGXLogger) {
        this._logger.debug("create MaterialService");
        this.itemService = itemS;
        this.materials = db.list<Material>(this.basePath);
        this.subscribeIndex();
    }

    ngOnInit(): void {

    }

    getMaterials() {
        return this.materials.valueChanges();
    }


    // Return a single observable item
    getMaterial(key: string): Observable<Material> {
        const itemPath = `${this.basePath}/${key}`;
        return this.db.object<Material>(itemPath).valueChanges();
    }

    save(item: Material) {
        
        //new
        if (item.Id == null) {
            return this.createItem(item);
        } else // update 
        {
            var key = item.Id.toString();
            return this.updateItem(key, item);
        }
    }

    createItem(item: Material) {        
        item.Id = this.getIndex();//this.curentIndex++;
        var key = item.Id.toString();
        const itemPath = `${this.basePath}/${key}`;
        this.db.object<Material>(itemPath).set(item)
            .catch(error => {
                this.handleError(error);
                return this.success(0);
            });
        return this.success(1);
    }


    // Update an existing item
    updateItem(key: string, item: Material) {
        this.materials.update(key, item)
            .catch(error => {
                this.handleError(error);
                return this.success(0);
            });
        return this.success(1);
    }

    // Deletes a single item
    deleteItem(key: string) {
        this.materials.remove(key)
            .catch(error => {
                this.handleError(error);
                return this.success(0);
            });
        return this.success(1);
    }

    // Deletes the entire list of items
    deleteAll() {
        this.materials.remove()
            .catch(error => {
                this.handleError(error);
                return this.success(0);
            });
        return this.success(1);
    }

    private subscribeIndex(): void {
        var ref = this.db.object<number>(this.indexPath);
        ref.valueChanges()
            .subscribe(v => {
                if (v == null) {
                    v = 1;
                }
                this.curentIndex = v;
                this._logger.debug("get material index " + this.curentIndex);
            });
    }

    private getIndex(): number{
        this.curentIndex++;
        this.db.object<number>(this.indexPath).set(this.curentIndex);
        return this.curentIndex;
    }

    private success(s: number) {
        return new Observable(observer => {
            observer.next(s);
        });
    }
    private handleError(error: Response) {
        this._logger.error(error);
    }
}


