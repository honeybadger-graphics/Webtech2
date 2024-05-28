import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegosDetailComponent } from './legos-detail.component';

describe('LegosDetailComponent', () => {
  let component: LegosDetailComponent;
  let fixture: ComponentFixture<LegosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegosDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
