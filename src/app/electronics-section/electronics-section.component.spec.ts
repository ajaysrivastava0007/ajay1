import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsSectionComponent } from './electronics-section.component';

describe('ElectronicsSectionComponent', () => {
  let component: ElectronicsSectionComponent;
  let fixture: ComponentFixture<ElectronicsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
