const mongoose = require('mongoose');

const movesetSchema = mongoose.Schema({
  pokemon: {type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon'},
  attacks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Attacks'}]
});

module.exports = mongoose.model('Moveset', movesetSchema);
