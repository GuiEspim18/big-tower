import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/utils/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { ImportsModule } from './shared/modules/imports/imports.module';
import { SideNavBarComponent } from './shared/utils/side-nav-bar/side-nav-bar.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FancyCardComponent } from './shared/utils/cards/fancy-card/fancy-card.component';
import { LightCardComponent } from './shared/utils/cards/light-card/light-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavBarComponent,
    CarouselComponent,
    FancyCardComponent,
    LightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
