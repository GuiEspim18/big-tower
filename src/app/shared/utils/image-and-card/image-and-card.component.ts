import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-and-card',
  templateUrl: './image-and-card.component.html',
  styleUrls: ['./image-and-card.component.scss']
})
export class ImageAndCardComponent implements OnInit {

  /* Vars */

  @Input() public cardTitle: string = "";

  @Input() public cardText: string = "";

  @Input() public image: string = "";

  @Input() public wrapReverse: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
