import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPanelComponent } from './about-us-panel.component';

describe('AboutUsPanelComponent', () => {
  let component: AboutUsPanelComponent;
  let fixture: ComponentFixture<AboutUsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
