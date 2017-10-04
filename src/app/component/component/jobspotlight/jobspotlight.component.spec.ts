import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobspotlightComponent } from './jobspotlight.component';

describe('JobspotlightComponent', () => {
  let component: JobspotlightComponent;
  let fixture: ComponentFixture<JobspotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobspotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobspotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
