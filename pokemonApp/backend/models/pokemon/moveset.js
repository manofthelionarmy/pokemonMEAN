const mongoose = require('mongoose');

const movesetSchema = mongoose.Schema({
  pokemonName: {type: String},
  kdex: {type: Number},
  attacks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Attacks'}]
});

module.exports = mongoose.model('Moveset', movesetSchema);
