// backend/src/models/Task.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  fechaLimite: { type: Date },
  responsable: { type: Schema.Types.ObjectId, ref: 'User' },
  estado: { type: String, default: 'Pendiente' }, // "Pendiente", "En Proceso", "Completada"
  creadoPor: { type: Schema.Types.ObjectId, ref: 'User' },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
