import { Injectable } from "@angular/core";
import { DatabaseService } from "./database.service";
import { Curso } from "../models/curso.model";

@Injectable({ providedIn: 'root' })
export class CursoService {
  constructor(private dbSvc: DatabaseService) {}

  async create(curso: Curso) {
    const db = await this.dbSvc.init();
    await db.run(
      `INSERT INTO curso (cuatrimestre_id, nombre, codigo, creditos, nota_minima)
       VALUES (?, ?, ?, ?, ?)`,
      [
        curso.cuatrimestre_id,
        curso.nombre,
        curso.codigo ?? null,
        curso.creditos ?? null,
        curso.nota_minima ?? 7.0
      ]
    );
  }

  async listByCuatrimestre(cuatrimestreId: number) {
    const db = await this.dbSvc.init();
    const res = await db.query(
      `SELECT * FROM curso WHERE cuatrimestre_id = ? ORDER BY id DESC`,
      [cuatrimestreId]
    );
    return res.values ?? [];
  }

  async updateNombre(id: number, nombre: string) {
    const db = await this.dbSvc.init();
    await db.run(`UPDATE curso SET nombre = ? WHERE id = ?`, [nombre, id]);
  }

  async remove(id: number) {
    const db = await this.dbSvc.init();
    await db.run(`DELETE FROM curso WHERE id = ?`, [id]);
  }
}
