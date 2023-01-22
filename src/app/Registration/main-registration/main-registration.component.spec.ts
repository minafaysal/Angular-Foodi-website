import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRegistrationComponent } from './main-registration.component';

describe('MainRegistrationComponent', () => {
  let component: MainRegistrationComponent;
  let fixture: ComponentFixture<MainRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
