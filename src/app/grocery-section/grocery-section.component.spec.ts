import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySectionComponent } from './grocery-section.component';

describe('GrocerySectionComponent', () => {
  let component: GrocerySectionComponent;
  let fixture: ComponentFixture<GrocerySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
