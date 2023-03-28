import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorairesPageComponent } from './honoraires-page.component';

describe('HonorairesPageComponent', () => {
  let component: HonorairesPageComponent;
  let fixture: ComponentFixture<HonorairesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorairesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonorairesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
