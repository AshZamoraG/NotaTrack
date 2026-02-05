import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CourseCardComponent, CursoMock } from '../../components/course-card/course-card.component';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CourseCardComponent]
})
export class CursosPage {

  cursos: CursoMock[] = [
    { id: 1, nombre: 'Matemáticas I', codigo: 'MAT101', creditos: 4, progreso: 45, estado: 'Al día' },
    { id: 2, nombre: 'Programación II', codigo: 'PROG202', creditos: 3, progreso: 20, estado: 'En riesgo' },
    { id: 3, nombre: 'Bases de Datos', codigo: 'BD150', creditos: 4, progreso: 80, estado: 'Aprobado' },
  ];

}
