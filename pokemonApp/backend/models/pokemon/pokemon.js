const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  pokemonName: {type: String, required: true},
  kdex: {type: Number, required: true},
  types: [{type: String, required: true }],
  description: {type: String, required: true},
  height: {type: Number, required: true},
  weight: {type: Number, required: true}
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
