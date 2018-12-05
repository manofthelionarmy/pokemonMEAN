const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  pokemonName: {type: String, required: true},
  kdex: {type: Number, required: true},
  types: [{type: String, required: true }],
  description: {type: String, required: true},
  height: {type: Number, required: true},
  weight: {type: Number, required: true},
  moveset: {type: mongoose.Schema.Types.ObjectId, ref: 'Moveset'},
  evolution: {type: mongoose.Schema.Types.ObjectId, ref: 'Evolutions'},
  weaknesses: {type: mongoose.Schema.Types.ObjectId, ref: 'Weaknesses'},
  resistances: {type: mongoose.Schema.Types.ObjectId, ref: 'Resistances'},
  abilities: {type: mongoose.Schema.Types.ObjectId, ref: 'Abilities'},
  stats: {type: mongoose.Schema.Types.ObjectId, ref: 'Stats'}
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
