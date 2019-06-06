import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavGuideComponent } from './side-nav-guide.component';

describe('SideNavGuideComponent', () => {
  let component: SideNavGuideComponent;
  let fixture: ComponentFixture<SideNavGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
