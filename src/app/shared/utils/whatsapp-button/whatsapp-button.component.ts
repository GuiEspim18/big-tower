import { Component, OnInit } from '@angular/core';
import { whatsappNumber } from '../variables/whatsapp-number/whatsapp-number';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent implements OnInit {

  /* Vars */

  private readonly url: string = `https://wa.me/${whatsappNumber}?text=Olá,%20Tenho%20Interesse%20em%20utilizar%20o%20espaco%20La%20Torre!`;


  constructor() { }

  ngOnInit(): void {
  }


  /* Redirect to whatsapp */

  public redirect(): void {
    window.open(this.url);
  }

}
