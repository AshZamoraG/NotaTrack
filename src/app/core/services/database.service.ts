import { Injectable } from "@angular/core";
import { Capacitor } from '@capacitor/core' ;
import { SQLiteConnection, CapacitorSQLite } from "@capacitor-community/sqlite";
import { Platform } from '@ionic/angular';

@Injectable({ providedIn : 'root' })
export class DatabaseService{

constructor(private platform: Platform) {}
private sqlite = new SQLiteConnection(CapacitorSQLite);
private dbName  = 'notatrack.bd';


async init() {

  await this.platform.ready(); 
  const platform = Capacitor.getPlatform();

  if (platform === 'web') {

    // Inicializa el Web Store (OBLIGATORIO en web)
    await this.sqlite.initWebStore();

  }

  const db = await this.sqlite.createConnection(
    this.dbName,
    false,
    'no-encryption',
    1,
    false
  );

  await db.open();

  await db.execute(`PRAGMA foreign_keys = ON;`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS perfil (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      identificacion TEXT,
      nombre TEXT NOT NULL,
      universidad TEXT,
      email TEXT,
      carrera TEXT,
      sede TEXT,
      creado_en TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS cuatrimestre (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      anio INTEGER NOT NULL,
      numero INTEGER NOT NULL,
      activo INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS curso (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cuatrimestre_id INTEGER NOT NULL,
      nombre TEXT NOT NULL,
      codigo TEXT,
      creditos INTEGER,
      nota_minima REAL DEFAULT 7.0,
      FOREIGN KEY (cuatrimestre_id) REFERENCES cuatrimestre(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS evaluacion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      curso_id INTEGER NOT NULL,
      nombre TEXT NOT NULL,
      tipo TEXT NOT NULL,
      porcentaje REAL NOT NULL,
      nota REAL,
      FOREIGN KEY (curso_id) REFERENCES curso(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_curso_cuatrimestre_id ON curso(cuatrimestre_id);
    CREATE INDEX IF NOT EXISTS idx_evaluacion_curso_id ON evaluacion(curso_id);
  `);

  return db;
}



}
