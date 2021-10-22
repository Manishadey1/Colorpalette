import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorspaComponent } from './colorspa.component';

describe('ColorspaComponent', () => {
  let component: ColorspaComponent;
  let fixture: ComponentFixture<ColorspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorspaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
