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
import { ReservationComponent } from './shared/utils/reservation/reservation.component';
import { ImageAndCardComponent } from './shared/utils/image-and-card/image-and-card.component';
import { TextAndImageComponent } from './shared/utils/text-and-image/text-and-image.component';
import { LoopLightCardsComponent } from './shared/utils/cards/loop-light-cards/loop-light-cards.component';
import { AboutComponent } from './pages/about/about.component';
import { DepositionsComponent } from './shared/components/depositions/depositions.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TextAndCardComponent } from './shared/utils/text-and-card/text-and-card.component';
import { AddressCardComponent } from './shared/utils/cards/address-card/address-card.component';
import { IframeGoogleMapsLocationComponent } from './shared/components/iframe-google-maps-location/iframe-google-maps-location.component';
import { SocialMediasComponent } from './shared/utils/social-medias/social-medias.component';
import { WhatsappButtonComponent } from './shared/utils/whatsapp-button/whatsapp-button.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    LoopLightCardsComponent,
    AboutComponent,
    DepositionsComponent,
    ServicesPageComponent,
    ContactComponent,
    TextAndCardComponent,
    AddressCardComponent,
    IframeGoogleMapsLocationComponent,
    SocialMediasComponent,
    WhatsappButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ImportsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
