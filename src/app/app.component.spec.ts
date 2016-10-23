/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FooterModule } from './footer';
import { AboutModule } from './about';
import { PortfolioModule } from './portfolio';
import { CertificateModule } from './certificate';
import { ServicesModule } from './services';
import { HeroModule } from './hero';

describe('App: Hingyman', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      imports: [
        AboutModule,
        FooterModule,
        PortfolioModule,
        CertificateModule,
        ServicesModule,
        HeroModule
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
