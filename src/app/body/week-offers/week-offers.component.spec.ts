import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekOffersComponent } from './week-offers.component';

describe('WeekOffersComponent', () => {
  let component: WeekOffersComponent;
  let fixture: ComponentFixture<WeekOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
