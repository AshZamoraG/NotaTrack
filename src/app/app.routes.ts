import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./ui/pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
/**
 * CUATRIMESTE
 */
  {
    path: 'cuatrimestres',
    loadComponent: () =>
      import('./ui/pages/cuatrimestres/cuatrimestres.page').then((m) => m.CuatrimestresPage),
  },

/**
 * CURSOS
 */

  {
    path: 'cursos',
    loadComponent: () =>
      import('./ui/pages/cursos/cursos.page').then((m) => m.CursosPage),
  },

  {
    path: 'curso-detalle/:id',
    loadComponent: () =>
      import('./ui/components/curso-detalle/curso-detalle.page').then((m) => m.CursoDetallePage),
  },

  {
    path: 'configurar-evaluaciones/:cursoId',
    loadComponent: () =>
      import('./ui/pages/configurar-evaluaciones/configurar-evaluaciones.page').then(
        (m) => m.ConfigurarEvaluacionesPage
      ),
  },

  {
    path: 'agregar-evaluacion/:cursoId',
    loadComponent: () =>
      import('./ui/pages/agregar-evaluacion/agregar-evaluacion.page').then(
        (m) => m.AgregarEvaluacionPage
      ),
  },
/**
 * EVALUACIÓN
 */

  {
    path: 'ajustes',
    loadComponent: () =>
      import('./ui/pages/ajustes/ajustes.page').then((m) => m.AjustesPage),
  },

  { path: '**', redirectTo: 'dashboard' },  {
    path: 'usuario',
    loadComponent: () => import('./ui/pages/usuario/usuario.page').then( m => m.UsuarioPage)
  },

];
