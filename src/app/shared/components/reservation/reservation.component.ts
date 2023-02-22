import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from '../../services/date.service';
import { WhatsappMessageService } from '../../services/whatsapp-message.service';
import { Alerts } from '../../utils/alerts/alerts';
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

  public readonly date: Date = new Date();

  public readonly minDate: Date = this.dateService.getNextDay(this.date);

  public form: FormGroup = new FormGroup({
    "date": new FormControl("", [Validators.required]),
    "hour": new FormControl("", [Validators.required]),
    "people": new FormControl("", [Validators.required])
  });
  

  constructor(
    private readonly alerts: Alerts,
    private readonly whatsappMessageService: WhatsappMessageService,
    private readonly dateService: DateService
  ) { }


  /* On Init */

  ngOnInit(): void {
  }


  /* Submit form */

  public submit(form: FormGroup): void {
    if (form.valid) {
      this.whatsappMessageService.sendMessage(form);
    } else {
      const error: string = "Preencha todos os campos obrigatórios!";
      this.alerts.error(error);
    }
  }

}
