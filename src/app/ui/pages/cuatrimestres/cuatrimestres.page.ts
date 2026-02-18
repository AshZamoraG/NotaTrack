import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonList, IonItem, IonLabel, IonInput
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CuatrimestreService } from 'src/app/core/services/cuatrimestre.service';

@Component({
  selector: 'app-cuatrimestres',
  templateUrl: './cuatrimestres.page.html',
  styleUrls: ['./cuatrimestres.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonList, IonItem, IonLabel, IonInput
  ],
})
export class CuatrimestresPage implements OnInit {
  activo: any = null;

  nuevo = { anio: 2026, numero: 1 };

  constructor(private cuatriSvc: CuatrimestreService) {}

  async ngOnInit() {
    // ✅ dato quemado: crea uno si no existe
    this.activo = await this.cuatriSvc.ensureActivoConPrueba();
  }

  async crearYActivar() {
    await this.cuatriSvc.create(this.nuevo.anio, this.nuevo.numero, 1);
    this.activo = await this.cuatriSvc.getActivo();
    alert('Cuatrimestre creado y activado ✅');
  }
}
