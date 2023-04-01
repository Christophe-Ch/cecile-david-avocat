import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DomainesPageComponent } from './domaines-page/domaines-page.component';
import { HonorairesPageComponent } from './honoraires-page/honoraires-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GoToContactComponent } from './go-to-contact/go-to-contact.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    DomainesPageComponent,
    HonorairesPageComponent,
    ContactPageComponent,
    GoToContactComponent,
    PageHeadingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
