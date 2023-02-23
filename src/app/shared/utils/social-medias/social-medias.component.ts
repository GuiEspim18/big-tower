import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../variables/social-media/dto/social-media.dto';
import { socialMedia } from '../variables/social-media/social-media';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent implements OnInit {

  /* Vars */

  public readonly socialMedia: Array<SocialMedia> = socialMedia


  constructor() { }


  /* On Init */

  ngOnInit(): void {
  }


  /* Redirect to the selected url page */

  public redirect(url: string): void {
    window.open(url);
  }

}
