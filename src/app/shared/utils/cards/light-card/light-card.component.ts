import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

  /* Vars */

  @Input() public title: string = "";

  @Input() public text: string = "";

  @Input() public image: string = "";

  @Input() public fancyTitle: boolean = false;

  @Input() public size: string = "3rem";


  constructor() { }

  ngOnInit(): void {
  }

}
