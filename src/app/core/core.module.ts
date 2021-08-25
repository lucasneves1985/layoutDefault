import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, FooterComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
  exports : [LayoutComponent]
})
export class CoreModule { }
