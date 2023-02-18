import { Component, Input, OnInit } from '@angular/core';
import { CarouselImages } from '../../utils/variables/carousel-images/dto/carousel-images.dto';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  /* Vars */

  @Input() public carouselBodyColor: string = "#292929";

  @Input() public images: Array<any> = new Array();

  public readonly myColor: string = "#00000066";

  public selected: CarouselImages;

  private selectedIndex: number;

  private maxIndexSelected: number;


  constructor() { }


  /* On Init */

  ngOnInit(): void {
    this.selectFirstImage();
  }


  /* Select first image */

  private selectFirstImage(): void {
    if (this.images.length>0) {
      this.selected = this.images[0];
      this.selectedIndex = this.images[0].index;
      this.maxIndexSelected = this.images.length
    } 
  }


  /* Select image badege click */

  public selectImage(item: any): void {
    this.selected = item
    this.selectedIndex = item.index
  }


  /* Next slide image */

  public next(): void  {
    if (this.selectedIndex < this.maxIndexSelected) this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex >= this.maxIndexSelected) this.selectedIndex = 0;
    this.images.map((element: any) => {
      if (element.index === this.selectedIndex) this.selected = element
    }) 
  }


  /* Previous slide image */

  public prev(): any {
    if (this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1
    } else {
      this.selectedIndex = this.maxIndexSelected - 1
    }   
    this.images.map((element: any) => {
      if (element.index === this.selectedIndex) this.selected = element
    }) 
  }


}
