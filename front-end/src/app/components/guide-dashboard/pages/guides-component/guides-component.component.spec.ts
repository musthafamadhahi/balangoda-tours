import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesComponentComponent } from './guides-component.component';

describe('GuidesComponentComponent', () => {
  let component: GuidesComponentComponent;
  let fixture: ComponentFixture<GuidesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
