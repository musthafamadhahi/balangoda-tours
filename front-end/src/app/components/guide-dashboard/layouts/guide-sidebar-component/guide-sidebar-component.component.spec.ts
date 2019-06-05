import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSidebarComponentComponent } from './guide-sidebar-component.component';

describe('GuideSidebarComponentComponent', () => {
  let component: GuideSidebarComponentComponent;
  let fixture: ComponentFixture<GuideSidebarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideSidebarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideSidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
