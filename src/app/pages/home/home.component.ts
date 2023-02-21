import { Component, OnInit } from '@angular/core';
import { carouselImages } from 'src/app/shared/utils/variables/carousel-images/carousel-images';
import { CarouselImages } from 'src/app/shared/utils/variables/carousel-images/dto/carousel-images.dto';
import { LightCardsContent } from 'src/app/shared/utils/variables/light-cards-content/dto/light-cards-content.dto';
import { lightCardsContent } from 'src/app/shared/utils/variables/light-cards-content/light-cards-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Vars */

  public readonly carouselImages: Array<CarouselImages> = carouselImages;

  public readonly fancyCardTitle: string = "Uma estrutura diferenciada";

  public readonly fancyCardText: string = "Disponibilizamos um amplo terraço aberto para você fotografar e filmar seus melhores momentos.";

  public readonly lightCardsContent: Array<LightCardsContent> = lightCardsContent

  public readonly bodyColor: string = "#222222";

  public selected: Date | null

  public readonly minDate: Date = new Date()

  public readonly myColor: string = "#ffffff24";

  constructor() { }

  ngOnInit(): void {
  }

}
