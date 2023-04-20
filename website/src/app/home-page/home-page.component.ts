import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private readonly _titleService: TitleService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Cabinet d\'avocat');
  }

}
