import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsortedElementListComponent } from './unsorted-element-list.component';

describe('UnsortedElementListComponent', () => {
  let component: UnsortedElementListComponent;
  let fixture: ComponentFixture<UnsortedElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsortedElementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsortedElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
