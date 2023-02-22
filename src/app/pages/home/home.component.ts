import { Component, OnInit } from '@angular/core';
import { carouselImages } from 'src/app/shared/utils/variables/carousel-images/carousel-images';
import { CarouselImages } from 'src/app/shared/utils/variables/carousel-images/dto/carousel-images.dto';
import { eventHours } from 'src/app/shared/utils/variables/event-hours/event-hours';
import { LightCardsContent } from 'src/app/shared/utils/variables/light-cards-content/dto/light-cards-content.dto';
import { lightCardsContent } from 'src/app/shared/utils/variables/light-cards-content/light-cards-content';
import { peopleNumber } from 'src/app/shared/utils/variables/people-number/people-number';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Vars */

  public readonly carouselImages: Array<CarouselImages> = carouselImages;

  public readonly fancyCardTitle: string = "Uma estrutura diferenciada!";

  public readonly fancyCardText: string = "Disponibilizamos um amplo terraço aberto para você fotografar e filmar seus melhores momentos.";

  public readonly lightCardsContent: Array<LightCardsContent> = lightCardsContent;

  public readonly cardAndImageSrc: string = "assets/img/image2.jpg";

  public readonly textAndImageTitle: string = "Espaco La Torre";

  public readonly textAndImageText: string = "O La Torre possui um espaço clean, aconchegante, versátil e perfeito para a realização da sua festa ou evento. Oferecemos dois ambientes climatizados que permite personalização conforme o tema da festa. Acomodamos 180 pessoas, sendo 115 no piso inferior e 65 no piso superior.";

  public readonly textAndImageSrc: string = "assets/img/image1.jpeg";


  constructor() { }


  /* On Init */

  ngOnInit(): void {
  }

}
