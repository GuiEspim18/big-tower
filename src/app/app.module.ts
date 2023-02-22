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
import { FooterComponent } from './shared/utils/footer/footer.component';
import { ReservationComponent } from './shared/components/reservation/reservation.component';
import { ImageAndCardComponent } from './shared/utils/image-and-card/image-and-card.component';
import { TextAndImageComponent } from './shared/utils/text-and-image/text-and-image.component';
import { LoopLightCardsComponent } from './shared/utils/cards/loop-light-cards/loop-light-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavBarComponent,
    CarouselComponent,
    FancyCardComponent,
    LightCardComponent,
    FooterComponent,
    ReservationComponent,
    ImageAndCardComponent,
    TextAndImageComponent,
    LoopLightCardsComponent
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
