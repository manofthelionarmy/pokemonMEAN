const express = require('express');

const Pokemon = require('../models/pokemon/pokemon');
const Abilities = require('../models/pokemon/abilities');
const Attacks = require('../models/pokemon/attacks');
const Evolutions = require('../models/pokemon/evolution');
const Moveset = require('../models/pokemon/moveset');
const Resistances = require('../models/pokemon/resistance');
const Weaknesses = require('../models/pokemon/weakness');
const Stats = require('../models/pokemon/stats');

const router = express.Router();

/**Look at this again later, and revise. Need to make it more efficient.
 * Definitely the addition of other UI will help lighten the load at
 * this endopint for the admin routerlication.
 */
router.post("/api/addPokemon", (req, res, next) => {

  const ability = new Abilities({
    kdex: req.body.abilities.kdex,
    abilityName: req.body.abilities.abilityName
  });

  const evolution = new Evolutions({
    evolutionId: req.body.evolution.kdex,
    pokemonName: req.body.evolution.pokemonName
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

router.post("/api/addAttack", (req, res, next) => {

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

router.get("/api/getPokemonOptions", (req, res, next) => {
  Pokemon.find().select('_id kdex pokemonName')
    .then(documents => {

      res.status(200).json({
        message: 'Pokemon fetched Successfully',
        pokemon: documents
      })
    });
});

router.get("/api/getAttackOptions", (req, res, next) => {

  var query = Attacks.find();

  query.exec().then((retrieved_attacks) => {
    res.status(200).json({
      message: 'Attacks retrieved successfully',
      attacks: retrieved_attacks
    })
  });


});

router.get("/api/checkMovesetExists/:id/:kdex/:pokemonName", (req, res, next) => {

  var query = Moveset.findOne({ pokemon: req.params.id }).populate('attacks pokemon').select('_id pokemon attacks');
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
          attacks: document.attacks.map(a => {
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

router.post("/api/addMoveset", (req, res, next) => {

  moveset = new Moveset({
    pokemon: req.body.pokemonId,
    attacks: req.body.attacks
  });

  moveset.save();

  Pokemon.findOneAndUpdate({ _id: req.body.pokemonId }, { moveset: moveset._id }, { new: true }).exec().then((document) => {
    res.status(201).json({
      message: 'Moveset added successfully'
    })
  });
});

router.put("/api/updateMoveset/", (req, res, next) => {
  var updateStatement = Moveset.findOneAndUpdate({ _id: req.body.id }, { attacks: req.body.attacks }, { new: true }).populate('attacks').exec((err, document) => {
    console.log(document.attacks);
    res.status(200).json({
      message: 'Updated successfully'
    })
  });
});

// query for pokemon-list. Using getPokemonList() from pokemon.service
router.get("/api/getPokemon", (req, res, next) => {
  var getListQuery = Pokemon.find().select('_id kdex pokemonName types');
  getListQuery.sort({ kdex: 'asc' }); //sorts the queries in ascending order based on the kdex number
  getListQuery.exec().then((data) => {
    console.log(data);
    res.status(200).json({
      messages: "Pokemon list get - success",
      pokemon: data.map((poke) => {
        return {
          id: poke._id,
          kdex: poke.kdex,
          pokemonName: poke.pokemonName,
          types: poke.types
        }
      })
    })
  });
});

router.get("/api/getPokemon/:id", (req, res, next) => {

  // 'weaknesses resistances abilities moveset'
  const deepPopulation = [
    {
      path: 'moveset',
      model: 'Moveset',
      populate: {
        path: 'attacks',
        model: 'Attacks'
      }
    },
    {
      path: 'weaknesses',
      model: 'Weaknesses'
    },
    {
      path: 'resistances',
      model: 'Resistances'
    },
    {
      path: 'abilities',
      model: 'Abilities'
    },
    {
      path: 'evolution',
      model: 'Evolutions',
    },
    {
      path: 'stats',
      model: 'Stats'
    }
  ]
  var getPokemonQuery = Pokemon.findById(req.params.id).populate(deepPopulation);
  getPokemonQuery.exec().then((data) => {
    res.status(200).json({
      message: 'Retrieved Successfully',
      pokemon: data
    });
  })
});

router.post("/api/addStats/:id", (req, res, next) => {
  const id = req.params.id;

  stats = new Stats({
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    special_attack: req.body.special_attack,
    special_defense: req.body.special_defense,
    speed: req.body.speed
  });

  stats.save();

  var addStatsStatement = Pokemon.findOneAndUpdate({_id: id}, {stats: stats._id}, {new: true});


  addStatsStatement.exec((err, document) => {
    console.log(document);
    res.status(201).json({
      message: 'Stats added successfully'
    })
  });
});

router.delete("/api/deletePokemon/:id", async (req, res, next) => {


  /**I found out this trick by chance. I watched a youtube video and finally I can things in synchronous calls!!! :) I can now update the logic
   * for the application!!!
   */
  var pokemon = await Pokemon.findOne({_id: req.params.id});
  // var deleteStatetment = await Pokemon.findOneAndDelete({_id: req.params.id});

  var evolutionId = pokemon.evolution;
  var movesetId = pokemon.moveset;
  var abilityId = pokemon.abilities;
  var resistanceId = pokemon.resistances;
  var weaknessId = pokemon.weaknesses;
  var statsId = pokemon.stats;

  await Pokemon.findByIdAndDelete({ _id: req.params.id });

  if(evolutionId !== undefined) {
    await Evolutions.findByIdAndDelete({_id: evolutionId});
  }
  if(movesetId !== undefined) {
    await Moveset.findByIdAndDelete({_id: movesetId});
  }
  if(abilityId !== undefined) {
    await Abilities.findByIdAndDelete({_id: abilityId});
  }
  if(resistanceId !== undefined) {
    await Resistances.findByIdAndDelete({_id: resistanceId});
  }
  if(weaknessId !== undefined) {
    await Weaknesses.findByIdAndDelete({_id: weaknessId});
  }
  if(statsId !== undefined) {
    await Stats.findByIdAndDelete({id: statsId});
  }

  console.log(pokemon);

  res.status(200).json({
    message: 'Working'
  });

  // console.log(pokemon);
});

module.exports = router;
