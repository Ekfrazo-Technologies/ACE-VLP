import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus email field and place cursor at end on init', () => {
    const inputElement = document.createElement('input');
    inputElement.value = 'test@example.com';
    const focusSpy = spyOn(inputElement, 'focus');
    const setSelectionRangeSpy = spyOn(inputElement, 'setSelectionRange');
    component.emailInput = new ElementRef(inputElement);

    component.ngAfterViewInit();

    expect(focusSpy).toHaveBeenCalled();
    expect(setSelectionRangeSpy).toHaveBeenCalledWith(16, 16);
  });
});
