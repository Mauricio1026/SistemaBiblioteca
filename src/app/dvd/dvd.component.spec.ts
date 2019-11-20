import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DvdComponent } from './dvd.component';

describe('DvdComponent', () => {
  let component: DvdComponent;
  let fixture: ComponentFixture<DvdComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvdComponent]
import { DVDComponent } from './dvd.component';
      describe('DVDComponent', () => {
        let component: DVDComponent;
        let fixture: ComponentFixture<DVDComponent>;
        beforeEach(async(() => {
          TestBed.configureTestingModule({
            declarations: [DVDComponent]
          })
            .compileComponents();
        }));

    beforeEach(() => {

      fixture = TestBed.createComponent(DvdComponent);

      fixture = TestBed.createComponent(DVDComponent);

      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
