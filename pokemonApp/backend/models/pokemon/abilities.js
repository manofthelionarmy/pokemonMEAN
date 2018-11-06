const mongoose = require('mongoose');

const abilitySchema = mongoose.Schema({
  kdex: {type: Number, required: true},
  abilityName: {type: String, required: true}
});

module.exports = mongoose.model('Abilities', abilitySchema);
