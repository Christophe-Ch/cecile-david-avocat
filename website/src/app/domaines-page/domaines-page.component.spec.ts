import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainesPageComponent } from './domaines-page.component';

describe('DomainesPageComponent', () => {
  let component: DomainesPageComponent;
  let fixture: ComponentFixture<DomainesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
