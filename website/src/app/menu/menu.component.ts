import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChildren('item') private _items!: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChild('highlight') private _highlight!: ElementRef<HTMLLIElement>;
  @ViewChild('close') private _closeToggle!: ElementRef<HTMLInputElement>;
  private _wasResponsive!: boolean;

  constructor(
    private readonly _router: Router,
    @Inject(PLATFORM_ID) private readonly _platformId: Object
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768 && this._wasResponsive) {
      this._moveHighlight();
      this._wasResponsive = false;
    } else if (event.target.innerWidth < 768) {
      this._wasResponsive = true;
    }
  }

  ngOnInit(): void {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this._moveHighlight());
        this._closeToggle.nativeElement.checked = false;
      });
    if (isPlatformBrowser(this._platformId)) {
      this._wasResponsive = window.innerWidth < 768;
    }
  }

  private _moveHighlight(): void {
    const items = this._items.toArray();
    const activeElement = items.find(item => item.nativeElement.classList.contains('active'))!;
    const previousElements = items.slice(0, items.indexOf(activeElement));

    const left = previousElements.reduce((sum: number, el: ElementRef) => sum + el.nativeElement.getBoundingClientRect().width, 0) + BASE_LEFT;
    this._highlight.nativeElement.style.left = `${left}px`;

    const width = activeElement.nativeElement.getBoundingClientRect().width;
    this._highlight.nativeElement.style.width = `${width - PADDING}px`;

    this._highlight.nativeElement.classList.remove('hidden');
  }
}
