import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-domaines-page',
  templateUrl: './domaines-page.component.html',
  styleUrls: ['./domaines-page.component.scss']
})
export class DomainesPageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService, private readonly _meta: Meta) { }

  ngOnInit(): void {
    this._titleService.setTitle('Domaines d\'intervention');
    this._meta.updateTag({
      name: 'description',
      content: 'Découvrez les domaines d\'intervention du cabinet. Nous sommes spécialisés en droit de la famille, contentieux locatif, recouvrement des créances et droit des mineurs.'
    });
    this._meta.updateTag({
      name: 'og:description',
      content: 'Découvrez les domaines d\'intervention du cabinet. Nous sommes spécialisés en droit de la famille, contentieux locatif, recouvrement des créances et droit des mineurs.'
    });
    this._meta.updateTag({
      name: 'keywords',
      content: 'avocat, cabinet, droit de la famille, contentieux locatif, recouvrement des créances, droit des mineurs'
    });
    this._meta.updateTag({
      name: 'og:image',
      content: '/assets/images/domaines.jpg'
    });
    this._meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });
  }

}
