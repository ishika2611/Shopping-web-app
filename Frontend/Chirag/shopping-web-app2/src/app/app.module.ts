import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MenuBarSearchComponent } from './menu-bar-search/menu-bar-search.component';
import { FrontPageMiddlePhotoSectionComponent } from './front-page-middle-photo-section/front-page-middle-photo-section.component';
import { LoginPageComponent } from './login-page/login-page.component';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    NavigationBarComponent,
    SideBarComponent,
    TopBarComponent,
    MenuBarSearchComponent,
    FrontPageMiddlePhotoSectionComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
