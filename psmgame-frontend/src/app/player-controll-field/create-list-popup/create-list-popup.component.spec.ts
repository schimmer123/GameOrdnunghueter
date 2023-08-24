import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListPopupComponent } from './create-list-popup.component';

describe('CreateListPopupComponent', () => {
  let component: CreateListPopupComponent;
  let fixture: ComponentFixture<CreateListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateListPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
