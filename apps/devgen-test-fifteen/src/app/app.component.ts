import { Component } from '@angular/core';

@Component({
  selector: 'devgen-test-fifteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'devgen-test-fifteen';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
