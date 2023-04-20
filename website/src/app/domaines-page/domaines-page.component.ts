import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-domaines-page',
  templateUrl: './domaines-page.component.html',
  styleUrls: ['./domaines-page.component.scss']
})
export class DomainesPageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Domaines d\'intervention')
  }

}
