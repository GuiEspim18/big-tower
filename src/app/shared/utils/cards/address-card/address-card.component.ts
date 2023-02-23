import { Component, OnInit } from '@angular/core';
import { contactsData } from '../../variables/contacts-data/contacts-data';
import { ContactsData } from '../../variables/contacts-data/dto/contacts-data.dto';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  /* Vars */

  public readonly contactsData: Array<ContactsData> = contactsData

  

  constructor() { }

  ngOnInit(): void {
  }

}
