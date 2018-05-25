import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NGXLogger  } from 'ngx-logger';

@Component({
  selector: 'breadcrumbs',
  template: `
  <ng-template *ngFor ="let breadcrumb of breadcrumbs; let last = last">
  <li class="breadcrumb-item" *ngIf="breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last" [ngClass]="{active: last}">
    <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
    <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
  </li>
</ng-template>
  `,
  providers:[]
})
export class BreadcrumbsComponent {
  breadcrumbs: Array<Object>;
  constructor(private router: Router, private route: ActivatedRoute, private _logger: NGXLogger) {
    this._logger.debug("create BreadcrumbsComponent");
  }
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
      url = '';
      do {
        let childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            let routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url:   url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }
}
