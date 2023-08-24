import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerElementComponent } from './player-element.component';

describe('PlayerElementComponent', () => {
  let component: PlayerElementComponent;
  let fixture: ComponentFixture<PlayerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
