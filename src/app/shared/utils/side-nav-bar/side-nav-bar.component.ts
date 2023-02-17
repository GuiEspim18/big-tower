import { Component, Input, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';
import { Pages } from '../variables/pages/dto/pages.dto';
import { pages } from '../variables/pages/pages';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
  animations: [
    new Animations().collapse
  ]
})
export class SideNavBarComponent implements OnInit {

  /* Vars */

  @Input() public show: boolean = false

  public readonly pages: Array<Pages> = pages

  public readonly myColor: string = "#00000066"



  constructor() { }

  ngOnInit(): void {
  }

}
