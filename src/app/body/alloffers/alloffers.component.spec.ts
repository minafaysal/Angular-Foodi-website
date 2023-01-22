import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloffersComponent } from './alloffers.component';

describe('AlloffersComponent', () => {
  let component: AlloffersComponent;
  let fixture: ComponentFixture<AlloffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlloffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlloffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
