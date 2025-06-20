import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfigComponent } from './config/config.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PoseidonCommonModule } from '../../common/poseidon-commond.module';
import { PrimeAllModule } from '../../common/prime-all.module';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    BreadcrumbComponent,
    TopbarComponent,
    RightmenuComponent,
    SidebarComponent,
    ConfigComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, PoseidonCommonModule, PrimeAllModule]
})
export class LayoutModule {}
