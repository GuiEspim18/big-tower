import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.scss']
})
export class FancyCardComponent implements OnInit {

  /* Vars */

  @Input() title: string = "";

  @Input() subTitle: string ="";

  @Input() content: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
