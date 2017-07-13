import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {RealTimeComponent} from './realtime.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                  
            path: '',
            component: RealTimeComponent,
            data: {
            title: 'Real Time'
            },

            }
        ])
    ],
    
exports: [
    
    RouterModule
]
})

export class RealTimeRoutingModule {

}