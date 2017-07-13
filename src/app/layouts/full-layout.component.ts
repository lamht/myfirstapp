import { Component, OnInit } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { Logger } from "angular2-logger/core"; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component1.html'
})
export class FullLayoutComponent implements OnInit {

  // Sets initial value to true to show loading spinner on first load
  loading: boolean = true;

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private router: Router, private _logger: Logger) {
      this._logger.log("Init full layout");
      router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
      });
  }

  ngOnInit(): void {}

  // Shows and hides the loading spinner during RouterEvent changes
  private navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }
}
