import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [HeroComponent]
})
export class HeroModule { }
