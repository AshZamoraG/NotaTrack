import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonLabel, IonInput, IonButton, IonList
} from '@ionic/angular/standalone';

import { CursoService } from 'src/app/core/services/curso.service';
import { CuatrimestreService } from 'src/app/core/services/cuatrimestre.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonLabel, IonInput, IonButton, IonList
  ]
})
export class CursosPage implements OnInit {
  cursos: any[] = [];
  cuatrimestreActivo: any = null;

  // ✅ formulario real
  nuevoCurso = {
    nombre: '',
    codigo: '',
    creditos: 0,
    nota_minima: 7
  };

  constructor(
    private cursoSvc: CursoService,
    private cuatriSvc: CuatrimestreService
  ) {}

  async ngOnInit() {
    this.cuatrimestreActivo = await this.cuatriSvc.getActivo();

    await this.cargarCursos();
  }

  async cargarCursos() {
    this.cursos = await this.cursoSvc.listByCuatrimestre(this.cuatrimestreActivo.id);
  }

  async guardarCurso() {
    if (!this.nuevoCurso.nombre.trim()) {
      alert('El nombre del curso es obligatorio.');
      return;
    }

    await this.cursoSvc.create({
      cuatrimestre_id: this.cuatrimestreActivo.id,
      nombre: this.nuevoCurso.nombre.trim(),
      codigo: this.nuevoCurso.codigo.trim(),
      creditos: Number(this.nuevoCurso.creditos),
      nota_minima: Number(this.nuevoCurso.nota_minima) || 7
    });

    // reset
    this.nuevoCurso = { nombre: '', codigo: '', creditos: 0, nota_minima: 7 };
    await this.cargarCursos();
  }

  async borrarCurso(id: number) {
    await this.cursoSvc.remove(id);
    await this.cargarCursos();
  }

  
}
