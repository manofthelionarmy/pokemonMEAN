const mongoose = require('mongoose');

const evolutionSchema = mongoose.Schema({
  evolutionId: {type: Number, required: true},
  kdex: {type: Number, required: true},
  pokemonName: {type: String, required: true}
});

module.exports = mongoose.model('Evolutions', evolutionSchema);
