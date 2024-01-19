import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsOfManagerComponent } from './visitors-of-manager.component';

describe('VisitorsOfManagerComponent', () => {
  let component: VisitorsOfManagerComponent;
  let fixture: ComponentFixture<VisitorsOfManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsOfManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsOfManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
