/** SUBMISSION FILE for phase 2 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon/pokemon');
// const PokemonAndTheirMovesets = require('./models/pokemon/pokemonAndTheirMovesets');
const Abilities = require('./models/pokemon/abilities');
const Attacks = require('./models/pokemon/attacks');
const Evolutions = require('./models/pokemon/evolution');
const Movesets = require('./models/pokemon/moveset');
const Resistances = require('./models/pokemon/resistance');
const Weaknesses = require('./models/pokemon/weakness');
const app = express();

const cloudmongoUrl = 'mongodb+srv://mando:1KBNWdXuNKTAJb3e@cluster0-ewz1r.mongodb.net/pokemon?retryWrites=true';

mongoose.connect(cloudmongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.error(
      error
    );
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

/**Look at this again later, and revise. Need to make it more efficient.
 * Definitely the addition of other UI will help lighten the load at
 * this endopint for the admin application.
 */
app.post("/api/addPokemon", (req, res, next) => {
  const pokemon = new Pokemon({
    pokemonName: req.body.pokemonName,
    kdex: req.body.kdex,
    types: req.body.types,
    description: req.body.description,
    height: req.body.height,
    weight: req.body.weight
  });

  const ability = new Abilities({
    kdex: req.body.abilities.kdex,
    abilityName: req.body.abilities.abilityName
  });

  const evolution = new Evolutions({
    evolutionId: req.body.evolutions.kdex,
    pokemonName: req.body.evolutions.pokemonName
  });

  const resistance = new Resistances({
    kdex: req.body.kdex,
    pokemonName: req.body.pokemonName,
    resistances: req.body.resistances.resistances
  });

  const weakness = new Weaknesses({
    kdex: req.body.kdex,
    pokemonName: req.body.pokemonName,
    weaknesses: req.body.weaknesses.weaknesses
  });

  pokemon.save();

  ability.save();

  evolution.save();

  resistance.save();

  weakness.save();

  res.status(201).json({
    message: 'Pokemon added successfully'
  });

});

app.get("/api/getPokemonOptions", (req, res, next) => {
  Pokemon.find().select('_id kdex pokemonName')
  .then( documents => {

    res.status(200).json({
      message: 'Pokemon fetched Successfully',
      pokemon: documents
    })
  });
});


var query1 = Pokemon.find();

var query2 = Pokemon.find().where('kdex').gt(10).lt(20).select('pokemonName');

var query3 = Pokemon.findByIdAndUpdate("5be7818bba194e0b74e09f10", {types: ['Dragon']}, {new: true}, (err, res) => {
  if(err) {
    console.log('Failed to update');
  }
});

const ember_attack = new Attacks({
  attackNumber: 1,
  attackName: 'Ember',
  PP: 35,
  power: 40,
  accuracy: 100,
  type: 'Fire',
  category: 'Special'
});

var query4 = ember_attack.save();

const moveset_charmander = new Movesets({
  pokemonName: 'Charmander',
  kdex: 4,
  attackNos: [ember_attack.attackNumber],
  attackNames: [ember_attack.attackName]
});

var query5 = moveset_charmander.save();

var query6 = Movesets.find();

const watergun_attack = new Attacks({
  attackNumber: 3,
  attackName: 'Water Gun',
  PP: 35,
  power: 40,
  accuracy: 100,
  type: 'Water',
  category: 'Special'
});

const moveset_squirtle = new Movesets({
  pokemonName: 'Squirtle',
  kdex: 7,
  attackNos: [watergun_attack.attackNumber],
  attackNames: [watergun_attack.attackName]
});

var query7 = watergun_attack.save();

var query8 = moveset_squirtle.save();

var query9 = Abilities.find();

var query10 = Evolutions.find();

var query11 = Resistances.find();

var query12 = Weaknesses.find();


query1.exec((err, res) => {
  console.log('Query1:\n' + res);
});

query2.exec((err, res) => {
  console.log('Query2\n' + res);
});

query3.exec((err, res) => {
  console.log('Query3\n' + res);
});

query4.then(res => {
  console.log('Query4:\n' + res);
});

query5.then(res => {
  console.log('Query5:\n' + res);
});

query6.exec((err, res) => {
  console.log('Query6:\n' + res)
})

query6.where('attackNames').in('Ember').limit(1).select('pokemonName').exec((err, res) => {
  console.log('Query7:\n' + res);
})

query7.then(res => {
  console.log('Query8:\n' + res);
});

query8.then(res => {
  console.log('Query9:\n' + res);
});

query9.exec((err, res) => {
  console.log('Query10:\n' + res );
});

query10.exec((err, res) => {
  console.log('Query11:\n' +  res);
});

query11.exec((err, res) => {
  console.log('Query12:\n' +  res);
});

query12.exec((err, res) => {
  console.log('Query13:\n' + res);
});

query12.where('weaknesses').in('Water').select('pokemonName').exec((err, res) => {
  console.log('Query14:\n' + res);
});

query11.where('resistances').in('Grass').select('pokemonName').exec((err, res) => {
  console.log('Query15:\n' + res);
});

query12.where('kdex').gt(20).select('pokemonName weaknesses').exec((err, res) => {
  console.log('Query16:\n' + res);
});


query1.where('types').in('Bug').select('kdex').exec((err, res) => {
  console.log('Query17:\n' + res);
});

module.exports = app;
