import { Component, Input, Renderer2 } from '@angular/core';
import { SIDENAV_CONTENTS } from './side-nav.contant';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @Input() breakpointCheck: boolean | undefined;
  sidenavContents = SIDENAV_CONTENTS;
  isMenuOpen: boolean = false;
  enteredButton: boolean = false;
  currentHoveredIndex: number | null = null;
  // Tham chiếu đến đối tượng mat-menu
  menu: MatMenu | undefined;
  isMatMenuOpen: boolean = false;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private ren: Renderer2
  ) {
    matIconRegistry.addSvgIcon(
      'icon_home',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icon_home.svg')
    );
  }
  // Tham chiếu đến đối tượng mat-menu-trigger
  prevButtonTrigger: any;
  openMenu(levelOneTrigger: MatMenuTrigger) {
    if (this.prevButtonTrigger && this.prevButtonTrigger != levelOneTrigger) {
      this.prevButtonTrigger.closeMenu();
      this.prevButtonTrigger = levelOneTrigger;
      levelOneTrigger?.openMenu();
    } else {
      this.prevButtonTrigger = levelOneTrigger;
      levelOneTrigger?.openMenu();
    }
  }

  // Method to close the menu
  closeMenu(trigger: MatMenuTrigger | undefined, button: any) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger?.closeMenu();
        this.ren.removeClass(
          button['_elementRef'].nativeElement,
          'cdk-focused'
        );
        this.ren.removeClass(
          button['_elementRef'].nativeElement,
          'cdk-program-focused'
        );
      }
      if (!this.isMatMenuOpen) {
        trigger?.closeMenu();
        this.ren.removeClass(
          button['_elementRef'].nativeElement,
          'cdk-focused'
        );
        this.ren.removeClass(
          button['_elementRef'].nativeElement,
          'cdk-program-focused'
        );
      } else {
        this.enteredButton = false;
      }
    }, 100);
  }
  menuenter() {
    this.isMatMenuOpen = true;
    // if (this.isMatMenu2Open) {
    //   this.isMatMenu2Open = false;
    // }
  }

  menuLeave(trigger: any, button: any) {
    setTimeout(() => {
      if (!this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(
          button['_elementRef'].nativeElement,
          'cdk-focused'
        );
        this.ren.removeClass(
          button['_elementRef'].nativeElement,
          'cdk-program-focused'
        );
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80);
  }
}
