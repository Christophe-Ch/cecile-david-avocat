import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DomainesPageComponent } from './domaines-page/domaines-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HonorairesPageComponent } from './honoraires-page/honoraires-page.component';
import { MentionsLegalesPageComponent } from './mentions-legales-page/mentions-legales-page.component';
import { CookiesPageComponent } from './cookies-page/cookies-page.component';
import { ConfidentialitePageComponent } from './confidentialite-page/confidentialite-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'domaines-intervention', component: DomainesPageComponent },
  { path: 'honoraires', component: HonorairesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'mentions-legales', component: MentionsLegalesPageComponent },
  { path: 'politique-de-cookies', component: CookiesPageComponent },
  { path: 'politique-de-confidentialite', component: ConfidentialitePageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
