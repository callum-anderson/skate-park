import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AccessibilityPageComponent } from './accessibility-page/accessibility-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FundPageComponent } from './fund-page/fund-page.component';
import { UpdatesPageComponent } from './updates-page/updates-page.component';


const routes: Routes = [{ path: '', component: AboutPageComponent }, { path: 'about', component: AboutPageComponent },
                      { path: 'updates', component: UpdatesPageComponent }, { path: 'fundraising', component: FundPageComponent},
                      { path: 'accessibility', component: AccessibilityPageComponent }, { path: 'contact', component: ContactPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
