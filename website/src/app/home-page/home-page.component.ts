import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService, private readonly _meta: Meta) { }

  ngOnInit(): void {
    this._titleService.setTitle('Cabinet d\'avocat');
    this._meta.updateTag({
      name: 'description',
      content: 'Bienvenue sur le site web de Cécile David, avocate à Rouen. Nous offrons des services de conseil et de représentation juridique pour vous aider à résoudre vos problèmes juridiques.'
    });
    this._meta.updateTag({
      name: 'og:description',
      content: 'Bienvenue sur le site web de Cécile David, avocate à Rouen. Nous offrons des services de conseil et de représentation juridique pour vous aider à résoudre vos problèmes juridiques.'
    });
    this._meta.updateTag({
      name: 'keywords',
      content: 'avocat, Cécile David, Rouen, conseil juridique, représentation juridique'
    });
    this._meta.updateTag({
      name: 'og:image',
      content: '/assets/images/home.jpg'
    });
    this._meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });
  }
}
