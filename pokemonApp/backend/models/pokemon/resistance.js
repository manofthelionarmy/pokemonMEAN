const mongoose = require('mongoose');

const resistanceSchema = mongoose.Schema({
  kdex: {type: Number},
  pokemonName: {type: String},
  resistances: [{type: String}]
});

module.exports = mongoose.model('Resistances', resistanceSchema);
