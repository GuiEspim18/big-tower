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

  public readonly title: string = "Espaço La Torre";

  public readonly subTitle: string = "Uma estrutura diferenciada";

  public readonly content: string = "Disponibilizamos um amplo terraço aberto para você fotografar e filmar seus melhores momentos."

  constructor() { }

  ngOnInit(): void {
  }

}
