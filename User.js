// backend/src/models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, default: 'AUXILIAR' },
  fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
