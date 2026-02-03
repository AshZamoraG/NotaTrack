import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarEvaluacionPage } from './agregar-evaluacion.page';

describe('AgregarEvaluacionPage', () => {
  let component: AgregarEvaluacionPage;
  let fixture: ComponentFixture<AgregarEvaluacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEvaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
