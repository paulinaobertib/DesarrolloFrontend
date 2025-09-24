import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDisplay } from './primeng-display';

describe('PrimengDisplay', () => {
  let component: PrimengDisplay;
  let fixture: ComponentFixture<PrimengDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
