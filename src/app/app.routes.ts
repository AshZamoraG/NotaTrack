import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () => import('./ui/pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'cuatrimestres',
    loadComponent: () => import('./ui/pages/cuatrimestres/cuatrimestres.page').then( m => m.CuatrimestresPage)
  },
  {
    path: 'cursos',
    loadComponent: () => import('./ui/pages/cursos/cursos.page').then( m => m.CursosPage)
  },
  {
    path: 'curso-detalle',
    loadComponent: () => import('./ui/pages/curso-detalle/curso-detalle.page').then( m => m.CursoDetallePage)
  },
  {
    path: 'configurar-evaluaciones',
    loadComponent: () => import('./ui/pages/configurar-evaluaciones/configurar-evaluaciones.page').then( m => m.ConfigurarEvaluacionesPage)
  },
  {
    path: 'agregar-evaluacion',
    loadComponent: () => import('./ui/pages/agregar-evaluacion/agregar-evaluacion.page').then( m => m.AgregarEvaluacionPage)
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./ui/pages/ajustes/ajustes.page').then( m => m.AjustesPage)
  },

  { path: '**', redirectTo: 'dashboard' },

];
