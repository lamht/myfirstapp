import {Component, OnInit} from '@angular/core';
import {ShareDataService} from './sharedata.service';
import { NGXLogger  } from 'ngx-logger'; 

@Component({
    template: `
      <router-outlet></router-outlet>
    `,
    providers: [ShareDataService]
})

export class MaterialComponent {
    title = "Material";
    constructor(private _logger: NGXLogger){
        this._logger.debug("create MaterialComponent");
        
    }
}

