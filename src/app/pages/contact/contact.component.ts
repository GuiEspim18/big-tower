import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /* Vars */

  public readonly title: string = "Contato";

  public readonly text: string = "Estamos sempre prontos para esclarecer suas dúvidas, ouvir suas sugestões e opiniões. Entre em contato conosco";

  public readonly fancySubTitle: boolean = false;

  

  constructor() { }

  ngOnInit(): void {
  }

}
