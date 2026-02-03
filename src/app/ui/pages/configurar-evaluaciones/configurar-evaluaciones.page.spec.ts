import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarEvaluacionesPage } from './configurar-evaluaciones.page';

describe('ConfigurarEvaluacionesPage', () => {
  let component: ConfigurarEvaluacionesPage;
  let fixture: ComponentFixture<ConfigurarEvaluacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarEvaluacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
