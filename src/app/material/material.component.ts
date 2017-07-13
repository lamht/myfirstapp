import {Component, OnInit} from '@angular/core';
import {ShareDataService} from './sharedata.service';
import { Logger } from "angular2-logger/core"; 

@Component({
    template: `
      <router-outlet></router-outlet>
    `,
    providers: [ShareDataService]
})

export class MaterialComponent {
    title = "Material";
    constructor(private _logger: Logger){
        this._logger.log("create MaterialComponent");
        
    }
}

