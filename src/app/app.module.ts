import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './full/header/header.component';
import { SidebarComponent } from './full/sidebar/sidebar.component';
import { MaterialModule } from './material.module';
import { FullComponent } from './full/full.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { BrandingComponent } from './full/sidebar/branding.component';
import { AppNavItemComponent } from './full/sidebar/nav-item/nav-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AppNavItemComponent,
    FullComponent,
    BrandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TablerIconsModule],
})
export class AppModule {}
