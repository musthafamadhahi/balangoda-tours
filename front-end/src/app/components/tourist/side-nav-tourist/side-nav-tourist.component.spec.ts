import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTouristComponent } from './side-nav-tourist.component';

describe('SideNavTouristComponent', () => {
  let component: SideNavTouristComponent;
  let fixture: ComponentFixture<SideNavTouristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavTouristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
