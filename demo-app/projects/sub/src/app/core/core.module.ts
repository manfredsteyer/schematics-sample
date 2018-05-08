import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { XComponent } from './x/x.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideMenuComponent, XComponent],
  exports: [SideMenuComponent]
})
export class CoreModule { }
