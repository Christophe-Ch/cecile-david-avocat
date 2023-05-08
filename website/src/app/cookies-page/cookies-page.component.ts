import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-cookies-page',
  templateUrl: './cookies-page.component.html',
  styleUrls: ['./cookies-page.component.scss']
})
export class CookiesPageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Politique de cookies');
  }

}
