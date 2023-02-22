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
  

  constructor() { }

  ngOnInit(): void {
  }

}
