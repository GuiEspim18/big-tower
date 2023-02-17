import { Component, Input, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
  animations: [
    new Animations().collapse
  ]
})
export class SideNavBarComponent implements OnInit {

  @Input() public show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
