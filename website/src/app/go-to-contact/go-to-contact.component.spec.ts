import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToContactComponent } from './go-to-contact.component';

describe('GoToContactComponent', () => {
  let component: GoToContactComponent;
  let fixture: ComponentFixture<GoToContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
