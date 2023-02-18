import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-fancy-card',
  templateUrl: './dark-fancy-card.component.html',
  styleUrls: ['./dark-fancy-card.component.scss']
})
export class DarkFancyCardComponent implements OnInit {

  /* Vars */

  @Input() title: string = "";

  @Input() subTitle: string ="";

  constructor() { }


  /* On init */

  ngOnInit(): void {
  }

}
