import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroPrestamosComponent } from './carro-prestamos.component';

describe('CarroPrestamosComponent', () => {
  let component: CarroPrestamosComponent;
  let fixture: ComponentFixture<CarroPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
