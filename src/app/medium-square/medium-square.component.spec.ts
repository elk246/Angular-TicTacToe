import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumSquareComponent } from './medium-square.component';

describe('MediumSquareComponent', () => {
  let component: MediumSquareComponent;
  let fixture: ComponentFixture<MediumSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
