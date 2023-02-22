import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-and-image',
  templateUrl: './text-and-image.component.html',
  styleUrls: ['./text-and-image.component.scss']
})
export class TextAndImageComponent implements OnInit {

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
  

  constructor() { }

  ngOnInit(): void {
  }

}
