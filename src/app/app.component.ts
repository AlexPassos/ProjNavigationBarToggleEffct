import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjNavigationBarToggleEffct';

  bActive: boolean = false;
  cAtiveButton: string = '';
  cAtiveNav: string = '';

  fnMenu() {
    if (this.bActive) {
      this.cAtiveButton = '';
      this.cAtiveNav = '';
    } else {
      this.cAtiveButton = 'fa-times';
      this.cAtiveNav = 'active';
    }
    this.bActive = !this.bActive;
  }
}
