import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessGuideComponent } from './chess-guide.component';

describe('ChessGuideComponent', () => {
  let component: ChessGuideComponent;
  let fixture: ComponentFixture<ChessGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
