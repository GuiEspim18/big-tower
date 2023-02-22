import { Component, OnInit } from '@angular/core';
import { eventHours } from '../../utils/variables/event-hours/event-hours';
import { peopleNumber } from '../../utils/variables/people-number/people-number';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  /* Vars */

  public readonly peopleNumber: Array<string> = peopleNumber();

  public readonly eventHours: Array<string> = eventHours();

  public readonly myColor: string = "#ffffff24";

  public readonly minDate: Date = new Date();
  

  constructor() { }

  ngOnInit(): void {
  }

}
