import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-configurar-evaluaciones',
  templateUrl: './configurar-evaluaciones.page.html',
  styleUrls: ['./configurar-evaluaciones.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfigurarEvaluacionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
