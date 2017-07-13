import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
//import { DropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/directives/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/directives/sidebar.directive';
import { AsideToggleDirective } from './shared/directives/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
//services
import { ItemsService }     from './shared/services/items.service';
import {NotificationService} from './shared/ToastNotification/notification.service';
import {BasicValidators} from './shared/CustomValidators/basicValidators';
import { NotificationsComponents } from './shared/ToastNotification/notification.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

 import { Logger, Level} from "angular2-logger/core"; 

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCVtKULsKmh_SPtYPKFfwdp_DEnPlMbsCA",
    authDomain: "myfristapp-d48c0.firebaseapp.com",
    databaseURL: "https://myfristapp-d48c0.firebaseio.com",
    projectId: "myfristapp-d48c0",
    storageBucket: "myfristapp-d48c0.appspot.com",
    messagingSenderId: "151644597395"
};


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    //DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    NotificationsComponents,
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,  
  }, 
    Http,
    ItemsService,
    NotificationService ,
    BasicValidators,
    Logger 
  ],
  bootstrap: [ AppComponent, NotificationsComponents ]
})
export class AppModule { 
  constructor(private _logger: Logger){
    this._logger.level = Level.LOG;
    this._logger.log("create AppModule");
  }
}
