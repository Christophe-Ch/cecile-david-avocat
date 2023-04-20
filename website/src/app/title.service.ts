import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

const TITLE_SUFFIX = '| Maître Cécile DAVID | Rouen';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
    constructor(private _title: Title) { }

    setTitle(title: string): void {
      this._title.setTitle(`${title} ${TITLE_SUFFIX}`);
    }
}
