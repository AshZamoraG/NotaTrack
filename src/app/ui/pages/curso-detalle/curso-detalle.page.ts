import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.page.html',
  styleUrls: ['./curso-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CursoDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
