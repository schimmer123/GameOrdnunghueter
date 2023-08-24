import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoverPopupComponent } from './gameover-popup.component';

describe('GameoverPopupComponent', () => {
  let component: GameoverPopupComponent;
  let fixture: ComponentFixture<GameoverPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameoverPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameoverPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
