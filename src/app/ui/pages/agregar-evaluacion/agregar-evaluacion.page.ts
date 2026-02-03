import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-evaluacion',
  templateUrl: './agregar-evaluacion.page.html',
  styleUrls: ['./agregar-evaluacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AgregarEvaluacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
