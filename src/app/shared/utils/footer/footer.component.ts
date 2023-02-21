import { Component, OnInit } from '@angular/core';
import { contactsData } from '../variables/contacts-data/contacts-data';
import { ContactsData } from '../variables/contacts-data/dto/contacts-data.dto';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /* Vars */

  public readonly contactsData: Array<ContactsData> = contactsData

  constructor() { }

  ngOnInit(): void {
    this.getCopyRight()
  }


  /* Get copy right */

  public getCopyRight(): string {
    const date: Date = new Date
    const currentYear: any = date.getFullYear()
    const str: string = `Copyright ©${currentYear} Todos os direitos resenvados Espaço La Torre`
    return str
  }

}
