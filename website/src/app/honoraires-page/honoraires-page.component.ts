import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-honoraires-page',
  templateUrl: './honoraires-page.component.html',
  styleUrls: ['./honoraires-page.component.scss']
})
export class HonorairesPageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService, private readonly _meta: Meta) { }

  ngOnInit(): void {
    this._titleService.setTitle('Honoraires');
    this._meta.updateTag({
      name: 'description',
      content: 'Découvrez les tarifs et les modalités de paiement des honoraires du cabinet. J\'offre des consultations juridiques à des prix raisonnables pour vous aider à obtenir la meilleure représentation possible.'
    });
    this._meta.updateTag({
      name: 'og:description',
      content: 'Découvrez les tarifs et les modalités de paiement des honoraires du cabinet. J\'offre des consultations juridiques à des prix raisonnables pour vous aider à obtenir la meilleure représentation possible.'
    });
    this._meta.updateTag({
      name: 'keywords',
      content: 'avocat, cabinet, Rouen, honoraires, tarifs, consultations juridiques, modalités de paiement'
    });
    this._meta.updateTag({
      name: 'og:image',
      content: '/assets/images/honoraires.jpg'
    });
    this._meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });
  }

}
