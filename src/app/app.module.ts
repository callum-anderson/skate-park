import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-header/page-header.component';
import { FooterComponent } from './page-footer/page-footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UpdatesPageComponent } from './updates-page/updates-page.component';
import { FundPageComponent } from './fund-page/fund-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    UpdatesPageComponent,
    FundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
