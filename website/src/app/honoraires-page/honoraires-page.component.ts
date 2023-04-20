import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-honoraires-page',
  templateUrl: './honoraires-page.component.html',
  styleUrls: ['./honoraires-page.component.scss']
})
export class HonorairesPageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Honoraires');
  }

}
