import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptbaseComponent } from './deptbase.component';

describe('DeptbaseComponent', () => {
  let component: DeptbaseComponent;
  let fixture: ComponentFixture<DeptbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
