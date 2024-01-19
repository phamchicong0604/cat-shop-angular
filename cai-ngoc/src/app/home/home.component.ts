import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { delay, take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  breakpointCheck: boolean = false;
  isIconMenu: boolean = false;
  constructor(private observer: BreakpointObserver) {}
  ngOnDestroy() {
    // this.subscibe1.unsubscribe();
  }
  ngAfterViewInit() {
    // Breakpoint at 1200px
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpointCheck = true;
        } else {
          this.breakpointCheck = false;
        }
      });
  }
  openMenu(e: any) {
    this.isIconMenu = !this.isIconMenu;
  }
}
