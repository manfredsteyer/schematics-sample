import { Component } from '@angular/core';
import { SideMenuService } from './core/side-menu/side-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sideMenuService: SideMenuService) {
    // sideMenuService.show = true;
  }

  title = 'app';
}
