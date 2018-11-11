const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon/pokemon');
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


module.exports = app;
