import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const BASE_LEFT = 8;
const PADDING = 32;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChildren('item') items!: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChild('highlight') highlight!: ElementRef<HTMLLIElement>;
  currentIndex: number = 0;

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      setTimeout(() => this._moveHighlight());
    })
  }

  private _moveHighlight(): void {
    const items = this.items.toArray();
    const activeElement = items.find(item => item.nativeElement.classList.contains('active'))!;
    const previousElements = items.slice(0, items.indexOf(activeElement));
    
    const left = previousElements.reduce((sum: number, el: ElementRef) => sum + el.nativeElement.getBoundingClientRect().width, 0) + BASE_LEFT;
    this.highlight.nativeElement.style.left = `${left}px`;

    const width = activeElement.nativeElement.getBoundingClientRect().width;
    this.highlight.nativeElement.style.width = `${width - PADDING}px`;

    this.highlight.nativeElement.classList.remove('hidden');
  } 
}
