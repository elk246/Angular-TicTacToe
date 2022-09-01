import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumBoardComponent } from './medium-board.component';

describe('MediumBoardComponent', () => {
  let component: MediumBoardComponent;
  let fixture: ComponentFixture<MediumBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
