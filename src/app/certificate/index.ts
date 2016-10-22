import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CertificateComponent } from './certificate.component';

@NgModule({
  declarations: [
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [CertificateComponent]
})
export class CertificateModule { }
