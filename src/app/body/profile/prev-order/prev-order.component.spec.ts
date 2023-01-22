import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevOrderComponent } from './prev-order.component';

describe('PrevOrderComponent', () => {
  let component: PrevOrderComponent;
  let fixture: ComponentFixture<PrevOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
