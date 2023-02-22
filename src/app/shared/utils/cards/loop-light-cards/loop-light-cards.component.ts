import { Component, Input, OnInit } from '@angular/core';
import { LightCardsContent } from '../../variables/light-cards-content/dto/light-cards-content.dto';

@Component({
  selector: 'app-loop-light-cards',
  templateUrl: './loop-light-cards.component.html',
  styleUrls: ['./loop-light-cards.component.scss']
})
export class LoopLightCardsComponent implements OnInit {

  /* Vars */

  @Input() public lightCardsContent: Array<LightCardsContent> = new Array();
  

  constructor() { }

  ngOnInit(): void {
  }

}
