const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
  hp: {type: Number},
  attack: {type: Number},
  defense: {type: Number},
  special_attack: {type: Number},
  special_defense: {type: Number},
  speed: {type: Number}
});

module.exports = mongoose.model('Stats', statsSchema);
