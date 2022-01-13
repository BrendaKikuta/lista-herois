import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero:any = {};

  heroThumbnail = '';

  getThumbnail = (path: string) => {
    return `${path}/standard_small.jpg`;
  }
}