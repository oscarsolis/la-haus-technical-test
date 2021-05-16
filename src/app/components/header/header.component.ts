import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isMobileMenuOpen = false;

  constructor() { }

  public onClickToggelMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
