import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegosComponent } from './add-legos.component';

describe('AddLegosComponent', () => {
  let component: AddLegosComponent;
  let fixture: ComponentFixture<AddLegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLegosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
