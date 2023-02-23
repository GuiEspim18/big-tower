import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-and-card',
  templateUrl: './text-and-card.component.html',
  styleUrls: ['./text-and-card.component.scss']
})
export class TextAndCardComponent implements OnInit {

  /* Vars */

  @Input() public title: string = "";

  @Input() public text: string = "";

  @Input() public image: string = "";

  @Input() public wrapReverse: boolean = false;

  @Input() public subTitle: string = "";

  @Input() public fancyTitle: boolean = true;

  @Input() public fancySubTitle: boolean = false;

  @Input() public titleColor: string = "#daa520";

  @Input() public subTitleColor: string = "#eeeeee";

  @Input() public flexDirection: string = "row";


  constructor() { }

  ngOnInit(): void {
  }

}
