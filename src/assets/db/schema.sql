CREATE TABLE perfil (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  identificacion TEXT,
  nombre TEXT NOT NULL,
  universidad TEXT,
  creado_en TEXT DEFAULT (datetime('now'))
);

CREATE TABLE cuatrimestre (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  anio INTEGER NOT NULL,
  numero INTEGER NOT NULL,
  activo INTEGER DEFAULT 0
);

CREATE TABLE curso (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cuatrimestre_id INTEGER NOT NULL,
  nombre TEXT NOT NULL,
  codigo TEXT,
  creditos INTEGER,
  nota_minima REAL DEFAULT 7.0,
  FOREIGN KEY (cuatrimestre_id) REFERENCES cuatrimestre(id)
);

CREATE TABLE evaluacion (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  curso_id INTEGER NOT NULL,
  nombre TEXT NOT NULL,
  tipo TEXT NOT NULL,
  porcentaje REAL NOT NULL,
  nota REAL,
  FOREIGN KEY (curso_id) REFERENCES curso(id)
);
