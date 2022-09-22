import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnFilterComponent } from './radio-btn-filter.component';

describe('RadioBtnFilterComponent', () => {
  let component: RadioBtnFilterComponent;
  let fixture: ComponentFixture<RadioBtnFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioBtnFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioBtnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
