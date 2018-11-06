const mongoose = require('mongoose');

const movesetSchema = mongoose.Schema({
  pokemonName: {type: String},
  kdex: {type: Number},
  attackNos: [{type: Number}],
  attackNames: [{type: String}]
});

module.exports = mongoose.model('Moveset', movesetSchema);
