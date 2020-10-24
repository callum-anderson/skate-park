import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { FundPageComponent } from './fund-page/fund-page.component';
import { UpdatesPageComponent } from './updates-page/updates-page.component';


const routes: Routes = [{ path: '', component: AboutPageComponent }, { path: 'about', component: AboutPageComponent },
                      { path: 'updates', component: UpdatesPageComponent }, { path: 'fundraising', component: FundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
