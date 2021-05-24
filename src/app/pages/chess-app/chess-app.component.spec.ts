import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessAppComponent } from './chess-app.component';

describe('ChessAppComponent', () => {
  let component: ChessAppComponent;
  let fixture: ComponentFixture<ChessAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
