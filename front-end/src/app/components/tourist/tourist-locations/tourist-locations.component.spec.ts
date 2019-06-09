import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristLocationsComponent } from './tourist-locations.component';

describe('TouristLocationsComponent', () => {
  let component: TouristLocationsComponent;
  let fixture: ComponentFixture<TouristLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
