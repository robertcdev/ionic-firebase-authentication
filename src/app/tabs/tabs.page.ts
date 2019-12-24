import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  page_title: string;

  constructor(
    private router: Router
  ) { }

  setTitle() {
    switch (this.router.url) {
      case '/tabs/home':
        this.page_title = 'Home';
        break;
      case '/tabs/shopping-list':
        this.page_title = 'Shopping List';
        break;
      case '/tabs/recipes':
        this.page_title = 'Recipes';
        break;
      case '/tabs/profile':
        this.page_title = 'Profile';
        break;
      default:
        this.page_title = 'Home';
        break;
    }
  }
}
