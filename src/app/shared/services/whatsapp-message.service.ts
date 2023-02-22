import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReservationForm } from '../utils/dto/reservation-form/reservation-form.dto';
import { whatsappNumber } from '../utils/variables/whatsapp-number/whatsapp-number';

@Injectable({
  providedIn: 'root'
})
export class WhatsappMessageService {

  /* Vars */

  private urlLink: string = `https://wa.me/${whatsappNumber}?text=`;


  constructor() { }


  /** 
   * Method to send whatsapp message
   * @param form
   */

  public sendMessage(form: FormGroup): void {
    const value: ReservationForm = form.value;
    const currentDate: Date = new Date();
    const currentHours: number = currentDate.getHours();
    const date: string = value.date.toLocaleDateString();
    const people: string = value.people;
    const hours: string = value.hour;
    let str: string = "";
    if (currentHours >= 1 && currentHours <= 11 || currentHours === 0) {
      str += "Bom%20dia!%20";
    }
    if (currentHours > 12 && currentHours <=18) {
      str += "Boa%20tarde!%20";
    }
    if (currentHours > 18) {
      str += "Boa%20noite!%20";
    }
    str += `Tenho%20interesse%20em%20utilizar%20o%20espaço%20La%20Torre%20dia%20${date}%20para%20${people}%20às%20${hours}.%20Aguardo%20o%20retorno!`;
    const link: string = this.urlLink + str;
    window.open(link);
  }

}
