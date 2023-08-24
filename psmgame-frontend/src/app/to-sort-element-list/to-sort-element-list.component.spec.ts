import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSortElementListComponent } from './to-sort-element-list.component';

describe('ToSortElementListComponent', () => {
  let component: ToSortElementListComponent;
  let fixture: ComponentFixture<ToSortElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToSortElementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToSortElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
