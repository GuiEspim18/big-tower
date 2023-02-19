import { Component, OnInit } from '@angular/core';
import { carouselImages } from 'src/app/shared/utils/variables/carousel-images/carousel-images';
import { CarouselImages } from 'src/app/shared/utils/variables/carousel-images/dto/carousel-images.dto';

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

  public readonly darkTitle: string = "Faça a sua reserva!";

  public readonly darkSubTitle: string = "Agende seu evento ou festa conosco!";

  public readonly bodyColor: string = "#222222";

  constructor() { }

  ngOnInit(): void {
  }

}
