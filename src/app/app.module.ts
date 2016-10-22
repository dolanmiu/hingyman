import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FooterModule } from './footer';
import { AboutModule } from './about';
import { PortfolioModule } from './portfolio';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AboutModule,
    PortfolioModule
  ]
})
export class AppModule { }
