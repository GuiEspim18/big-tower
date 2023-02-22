import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WhatsappMessageService {

  /* Vars */

  private urlLink: string = "https://wa.me/5511947080873?text="


  constructor() { }


  /** 
   * Method to send whatsapp message
   * @param form
   */

  public sendMessage(form: FormGroup): void {
    
  }

}
