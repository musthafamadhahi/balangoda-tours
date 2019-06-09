import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristHotelsComponent } from './tourist-hotels.component';

describe('TouristHotelsComponent', () => {
  let component: TouristHotelsComponent;
  let fixture: ComponentFixture<TouristHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
