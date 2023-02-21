import { Component, Input, OnInit } from '@angular/core';
import { CarouselImages } from '../../utils/variables/carousel-images/dto/carousel-images.dto';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  /* Vars */

  @Input() public images: Array<any> = new Array();



  constructor() { }


  /* On Init */

  ngOnInit(): void {
  }



}
