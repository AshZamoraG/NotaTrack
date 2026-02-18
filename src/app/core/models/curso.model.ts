export interface Curso {
  id?: number;
  cuatrimestre_id: number;
  nombre: string;
  codigo?: string;
  creditos?: number;
  nota_minima?: number; // default 7
}
