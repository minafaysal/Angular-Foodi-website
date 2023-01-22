import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDeliveryComponent } from './best-delivery.component';

describe('BestDeliveryComponent', () => {
  let component: BestDeliveryComponent;
  let fixture: ComponentFixture<BestDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
