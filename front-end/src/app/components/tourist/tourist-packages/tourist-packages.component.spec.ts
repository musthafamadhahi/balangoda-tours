import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristPackagesComponent } from './tourist-packages.component';

describe('TouristPackagesComponent', () => {
  let component: TouristPackagesComponent;
  let fixture: ComponentFixture<TouristPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
