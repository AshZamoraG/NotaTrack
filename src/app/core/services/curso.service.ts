import { Injectable } from "@angular/core";
import { DatabaseService } from "./database.service";


@Injectable({ providedIn: 'root'})
export class CursoService {
  constructor (private dbSvc: DatabaseService){}

  async create(nombre:string){
      const db = await this.dbSvc.init();
      await db.run('INSERT INTO CURSO (nombre) VALUES (?)',[nombre]);
  }

  async list(){
    const db = await this.dbSvc.init();
    const res = await db.query('SELECT * FROM cuso ORDER BY id DESC ');
    return res.values ??[];
  }

  async update (id: number, nombre: string){
    const db = await this.dbSvc.init();
    await db.run('UPDATE curso SET nombre =? WHERE id =?',[nombre, id]);
  }

  async remove(id:number){
    const db = await this.dbSvc.init();
    await db.run('DELETE FROM curso WHERE id = ?',[id]);
  }



}
