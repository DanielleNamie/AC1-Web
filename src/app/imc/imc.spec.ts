import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMC } from './imc';

describe('IMC', () => {
  let component: IMC;
  let fixture: ComponentFixture<IMC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IMC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
