import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/directives/nav-dropdown.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/directives/sidebar.directive';
import { AsideToggleDirective } from './shared/directives/aside.directive';
import { NotificationsComponents } from './shared/ToastNotification/notification.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BasicValidators } from './shared/CustomValidators/basicValidators';
import { NotificationService } from './shared/ToastNotification/notification.service';
import { ItemsService } from './shared/services/items.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatDialogModule,
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
    ConfirmDialogComponent,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,  
  }, 
    ItemsService,
    NotificationService ,
    BasicValidators
  ],
  bootstrap: [AppComponent, NotificationsComponents ]
})
export class AppModule { }
