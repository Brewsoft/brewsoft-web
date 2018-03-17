import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewmasterPanelComponent } from './brewmaster-panel.component';

describe('BrewmasterPanelComponent', () => {
  let component: BrewmasterPanelComponent;
  let fixture: ComponentFixture<BrewmasterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewmasterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewmasterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
