import { Component, OnInit } from '@angular/core';
import { ServicesPage } from 'src/app/shared/utils/services-page/dto/services-page';
import { servicesPage } from 'src/app/shared/utils/services-page/services-page';
import { LightCardsContent } from 'src/app/shared/utils/variables/light-cards-content/dto/light-cards-content.dto';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  /* Vars */

  public readonly servicesPage: Array<ServicesPage> = servicesPage

  public content: Array<LightCardsContent> = new Array()

  constructor() { }


  /* On Init */

  ngOnInit(): void {
    this.reorderArray()
  }


  /* Reorder light cards content array */

  private reorderArray(): void {
    for (let service of this.servicesPage) {
      const title: Array<string> = service.title
      let str: string = ""
      let titleLength: number = title.length - 1
      for (let item of title) {
        if (title.indexOf(item) < titleLength) str += ` ${item}, `;
        if (title.indexOf(item) === titleLength) str += ` ${item} `;
      }
      const obj: any = {
        title: str,
        text: service.text,
        str: "",
        size: "1.5rem"
      }
      this.content.push(obj)
    }
  }

}
