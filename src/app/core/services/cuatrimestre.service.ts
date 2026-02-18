import { Injectable } from "@angular/core";
import { DatabaseService } from "./database.service";
import {Cuatrimestre} from "../models/cuatrimestre.model";

@Injectable({ providedIn: 'root' })
export class CuatrimestreService {
  constructor(private dbSvc: DatabaseService) {}

  async create(anio: number, numero: number, activo = 1) {
    const db = await this.dbSvc.init();

    if (activo === 1) {
      await db.run(`UPDATE cuatrimestre SET activo = 0`);
    }

    await db.run(
      `INSERT INTO cuatrimestre (anio, numero, activo) VALUES (?, ?, ?)`,
      [anio, numero, activo]
    );
  }

  async getActivo() {
    const db = await this.dbSvc.init();
    const res = await db.query(`SELECT * FROM cuatrimestre WHERE activo = 1 LIMIT 1`);
    return (res.values ?? [])[0] ?? null;
  }

  async ensureActivoConPrueba() {
    const activo = await this.getActivo();
    if (activo) return activo;

    //  dato quemado de prueba
    await this.create(2026, 1, 1);
    return await this.getActivo();
  }
}
