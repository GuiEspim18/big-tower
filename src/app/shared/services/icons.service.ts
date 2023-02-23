import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { SocialMedia } from '../utils/variables/social-media/dto/social-media.dto';
import { socialMedia } from '../utils/variables/social-media/social-media';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  /* Vars */

  private readonly socialMedia: Array<SocialMedia> = socialMedia


  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) { }

  
  /** 
   * Method to register icons on mat icon
   */

  public register(): void {
    for (let item of this.socialMedia) {
      this.matIconRegistry.addSvgIconLiteral(
        item.name,
        this.domSanitizer.bypassSecurityTrustHtml(item.icon)
      );
    }
  }

}
