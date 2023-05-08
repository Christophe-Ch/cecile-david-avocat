import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-confidentialite-page',
  templateUrl: './confidentialite-page.component.html',
  styleUrls: ['./confidentialite-page.component.scss']
})
export class ConfidentialitePageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Politique de confidentialité');
  }

}
