import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristGuidesComponent } from './tourist-guides.component';

describe('TouristGuidesComponent', () => {
  let component: TouristGuidesComponent;
  let fixture: ComponentFixture<TouristGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
