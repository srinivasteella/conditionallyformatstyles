import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowncompComponent } from './dropdowncomp.component';

describe('DropdowncompComponent', () => {
  let component: DropdowncompComponent;
  let fixture: ComponentFixture<DropdowncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowncompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
