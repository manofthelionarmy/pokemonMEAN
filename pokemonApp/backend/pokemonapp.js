const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon/pokemon');
const Abilities = require('./models/pokemon/abilities');
const Attacks = require('./models/pokemon/attacks');
const Evolutions = require('./models/pokemon/evolution');
const Moveset = require('./models/pokemon/moveset');
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
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
})

/**Look at this again later, and revise. Need to make it more efficient.
 * Definitely the addition of other UI will help lighten the load at
 * this endopint for the admin application.
 */
app.post("/api/addPokemon", (req, res, next) => {

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

  ability.save();

  evolution.save();

  resistance.save();

  weakness.save();

  const pokemon = new Pokemon({
    pokemonName: req.body.pokemonName,
    kdex: req.body.kdex,
    types: req.body.types,
    description: req.body.description,
    height: req.body.height,
    weight: req.body.weight,
    movset: null,
    evolution: evolution._id,
    weaknesses: weakness._id,
    resistances: resistance._id,
    abilities: ability._id
  });

  pokemon.save().then((createdPokemon) => {
    res.status(201).json({
      message: 'Pokemon added successfully',
      pokemonId: createdPokemon._id
    });
  });

});

app.post("/api/addAttack", (req, res, next) => {

  attack = new Attacks({
    attackNumber: req.body.attackNumber,
    attackName: req.body.attackName,
    PP: req.body.PP,
    power: req.body.power,
    accuracy: req.body.accuracy,
    type: req.body.type,
    category: req.body.category
  });

  attack.save().then((created_attack) => {
    res.status(201).json({
      message: 'Attack Added Sucessfully',
      attackId: created_attack._id
    });
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

app.get("/api/getAttackOptions", (req, res, next) => {

  var query = Attacks.find();

  query.exec().then((retrieved_attacks) => {
    res.status(200).json({
      message: 'Attacks retrieved successfully',
      attacks: retrieved_attacks
    })
  });


});

app.get("/api/checkMovesetExists/:id/:kdex/:pokemonName", (req, res, next) => {

  var query = Moveset.findOne({pokemon: req.params.id}).populate('attacks pokemon').select('_id pokemon attacks');
  /**Had to remap in here. */
  query.exec().then((document) => {
    if (document != null) {
      console.log('Here: \n' + document);
      console.log(document.attacks);
      console.log(document.pokemon);
      res.status(200).json({
        message: `Entry does exist`,
        exists: true,
        moveset: {
          id: document._id,
          kdex: document.pokemon.kdex,
          pokemonName: document.pokemon.pokemonName,
          attacks: document.attacks.map( a => {
            return {
              id: a.id,
              attackName: a.attackName,
              attackNumber: a.attackNumber,
              PP: a.PP,
              power: a.power,
              accuracy: a.accuracy,
              type: a.type,
              category: a.category
            }
          })
        }
      });
    } else {
      console.log('Actually here: ' + document);
      res.status(200).json({
        message: `Entry doesn't exist`,
        exists: false,
        moveset: null
      });
    }
  });
});

app.post("/api/addMoveset", (req, res, next) => {

  moveset = new Moveset({
    pokemon: req.body.pokemonId,
    attacks: req.body.attacks
  });

  moveset.save();

  Pokemon.findOneAndUpdate({_id: req.body.pokemonId}, {moveset: moveset._id}, {new: true}).exec().then((document) => {
    res.status(201).json({
      message: 'Moveset added successfully'
    })
  });
});

app.put("/api/updateMoveset/", (req, res, next) => {
  var updateStatement = Moveset.findOneAndUpdate({ _id: req.body.id }, {attacks: req.body.attacks}, {new: true}).populate('attacks').exec((err, document) => {
    console.log(document.attacks);
    res.status(200).json({
      message: 'Updated successfully'
    })
  });
});
module.exports = app;
