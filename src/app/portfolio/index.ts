import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
