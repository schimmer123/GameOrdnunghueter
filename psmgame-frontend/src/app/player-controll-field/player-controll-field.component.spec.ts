import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerControllFieldComponent } from './player-controll-field.component';

describe('PlayerControllFieldComponent', () => {
  let component: PlayerControllFieldComponent;
  let fixture: ComponentFixture<PlayerControllFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerControllFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerControllFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
