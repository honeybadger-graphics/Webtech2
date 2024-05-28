import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegosListComponent } from './legos-list.component';

describe('LegosListComponent', () => {
  let component: LegosListComponent;
  let fixture: ComponentFixture<LegosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegosListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
