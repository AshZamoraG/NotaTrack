import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuatrimestresPage } from './cuatrimestres.page';

describe('CuatrimestresPage', () => {
  let component: CuatrimestresPage;
  let fixture: ComponentFixture<CuatrimestresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatrimestresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
