import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-header/page-header.component';
import { FooterComponent } from './page-footer/page-footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UpdatesPageComponent } from './updates-page/updates-page.component';
import { FundPageComponent } from './fund-page/fund-page.component';
import { AccessibilityPageComponent } from './accessibility-page/accessibility-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    UpdatesPageComponent,
    FundPageComponent,
    AccessibilityPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faInstagram);
  }
}
