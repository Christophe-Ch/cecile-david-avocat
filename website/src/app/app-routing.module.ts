import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DomainesPageComponent } from './domaines-page/domaines-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HonorairesPageComponent } from './honoraires-page/honoraires-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'domaines-intervention', component: DomainesPageComponent },
  { path: 'honoraires', component: HonorairesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
