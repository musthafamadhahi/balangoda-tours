import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristDashboardComponent } from './tourist-dashboard.component';

describe('TouristDashboardComponent', () => {
  let component: TouristDashboardComponent;
  let fixture: ComponentFixture<TouristDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
