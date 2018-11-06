const mongoose = require('mongoose');

const weaknessSchema = mongoose.Schema({
  kdex: {type: Number},
  pokemonName: {type: String},
  weaknesses: [{type: String}]
})

module.exports = mongoose.model('Weaknesses', weaknessSchema);
