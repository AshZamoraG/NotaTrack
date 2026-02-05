import { Component, Input } from '@angular/core';
import { IonicModule }from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type CursoMock={
id: number;
nombre: string;
codigo?:string;
creditos?: number;
progreso?: number;
estado?: 'Al día'|'En riesgo'|'Aprobado';
};



@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  standalone: true,
  imports:[IonicModule, CommonModule, RouterModule],
})
export class CourseCardComponent  {

 @Input() curso!: CursoMock;
}
