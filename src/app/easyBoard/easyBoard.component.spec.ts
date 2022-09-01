import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyBoardComponent } from './easyBoard.component';

describe('BoardComponent', () => {
  let component: EasyBoardComponent;
  let fixture: ComponentFixture<EasyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
