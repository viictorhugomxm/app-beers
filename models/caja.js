const {Schema, model} = require('mongoose');

const CajaSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true
  },
  PriceTotal: {
    type: Number,
    default: true,
    required: true
  },
});

module.exports = model('Caja', CajaSchema);