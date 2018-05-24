import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { ItemsService }     from '../shared/services/items.service';
import { Logger } from "angular2-logger/core"; 

import { map, catchError } from 'rxjs/operators';


import {Material} from './models/material.model'

//import globalVariables = require('../shared/global/global.variables')

@Injectable()
export class MaterialService {

   // private apiUrl = globalVariables.apiUrl + "MaterialsAPI/";
    //private webUrl = globalVariables.webUrl + "Materials/";
    private materials : Array<Material>;
    private curentIndex : number = 1;
    private itemService: ItemsService;
   
   constructor(private itemS: ItemsService, private _logger: Logger) {
       this._logger.log("create MaterialService");
       this.materials = new Array<Material>();
       this.itemService = itemS;
   }
   /*
    constructor(private _http: Http) {
        //this.materials = new Array<Material>();
        //this.itemService = itemS;
    }
    */
    
    
    getMaterial(materialId){
        if(materialId > 0){
            var item =  this.itemService.getItem<Material>(this.materials, (m) => m.MaterialId == materialId);
            return new Observable<Material>(observer => {
                observer.next(item)
            });
        } else {
            return new Observable<Material>(observer => {
                observer.next(null)
            }); 
        }
    }

  
    getMaterials() {
    
            return new Observable<Array<Material>>(observer => {
                observer.next(this.materials);                
            });
        

        /*
        if (materialId > 0) {
            return this._http.get(this.apiUrl + "GetMaterials?materialId=" + materialId)
                .map(res => res.json()[0])
            //             .map(this.extractData)
        }
        else {
            return this._http.get(this.apiUrl + "GetMaterials")
                .map(res => res.json())
        }
       */
    } 
    
    private extractData(res: Response) {
        let body = res.json();
        return body[0];
    }
    
    

    insertUpdateMaterial(material : Material, isDetele = false) {
        //debugger
        //var data;
        //var materialModel = new Material();
        if (isDetele) {
            var id = material.MaterialId;
            if(id != null && id > 0){
                this.itemService.removeItems<Material>(this.materials, (m) => m.MaterialId == id);
            }
        } else {
            var isNew = (material.MaterialId == null || material.MaterialId <= 0)
            if(isNew){
                material.MaterialId = this.curentIndex++;
                this.materials.push(material);
            } else {
                this.itemService.setItem<Material>(this.materials, (m) => m.MaterialId == material.MaterialId, material);
            }
            
        }

        return new Observable(observer => {
                observer.next(1)
            });
        /*
        var error;
        let body = JSON.stringify(material);
        let headers = new Headers({ 'Content-Type': 'application/json', async: false });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.apiUrl + "InsertUpdateMaterial/", body, options)
            .map(res => {
                // If request fails, throw an Error that will be caught
                if (res.status < 200 || res.status >= 300) {
                    throw new Error('This request has failed ' + res.status);
                }
                // If everything went fine, return the response
                else {
                    return res.json();
                }
            })
        // .subscribe(
        // (data) => this.data = data, // Reach here if res.status >= 200 && <= 299
        // (err) => this.error = err);
        // .catch(this.handleError);       
        */
    }
     
    
    private handleError(error: Response) {
        console.error(error);
    }

    
}


