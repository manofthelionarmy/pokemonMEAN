const mongoose = require('mongoose');

const attackSchema = mongoose.Schema({
  attackNumber: {type: Number, required: true},
  attackName: {type: String, required: true},
  PP: {type: Number, required: true},
  power: {type: Number, required: true},
  accuracy: {type: Number, required: true},
  type: {type: String, required: true},
  category: {type: String, required: true}
});

module.exports = mongoose.model('Attacks', attackSchema);
