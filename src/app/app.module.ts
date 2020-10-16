import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { LayoutThreeComponent } from './layout-three/layout-three.component';
import { LayoutFourComponent } from './layout-four/layout-four.component';
import { LayoutFiveComponent } from './layout-five/layout-five.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutOneComponent,
    LayoutTwoComponent,
    LayoutThreeComponent,
    LayoutFourComponent,
    LayoutFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
