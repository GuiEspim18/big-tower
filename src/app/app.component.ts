import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { IconsService } from './shared/services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private dateAdapter: DateAdapter<Date>,
    private readonly iconService: IconsService
  ) { 
    this.dateAdapter.setLocale('en-GB');
  }


  /* On Init */

  ngOnInit(): void {
    this.iconService.register();
  }
  

  title = 'big-tower';
}
