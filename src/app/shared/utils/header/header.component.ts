import { Component, OnInit } from '@angular/core';
import { Pages } from '../variables/pages/dto/pages.dto';
import { pages } from '../variables/pages/pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: []
})
export class HeaderComponent implements OnInit {

  /* Vars */

  public readonly pages: Array<Pages> = pages

  public readonly myColor: string = "#00000066"

  public show: boolean = false;


  constructor() { }


  /* On init */

  ngOnInit(): void {
  }


  /* Toggle method */

  public toggle(): any {
    if (this.show === false) {
      this.show = true
    } else {
      this.show = false
    }
  }

}
