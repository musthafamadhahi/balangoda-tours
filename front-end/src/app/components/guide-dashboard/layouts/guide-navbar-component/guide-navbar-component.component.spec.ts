import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideNavbarComponentComponent } from './guide-navbar-component.component';

describe('GuideNavbarComponentComponent', () => {
  let component: GuideNavbarComponentComponent;
  let fixture: ComponentFixture<GuideNavbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideNavbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
