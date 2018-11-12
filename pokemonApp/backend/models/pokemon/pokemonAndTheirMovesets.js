const mongoose = require('mongoose');

const pokemonAndTheirMovesets = new mongoose.Schema({
  _id: String,
  listofPokemon: [{
    type: mongoose.Schema.Types.ObjectId,
  }]
});


// module.exports = mongoose.model('PokemonAndTheirMoveset', pokemonAndTheirMovesets);
