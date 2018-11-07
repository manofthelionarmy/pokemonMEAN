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

mongoose.connect("mongodb+srv://mando:1KBNWdXuNKTAJb3e@cluster0-ewz1r.mongodb.net/pokemon?retryWrites=true", { useNewUrlParser: true })
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


const charmander = new Pokemon({
  pokemonName: 'Charmander',
  kdex: 4,
  types: ['Fire'],
  description: 'Fire pokemon',
  height: 4.5,
  weight: 20.9
});

const ability_charmander = new Abilities({
  kdex: charmander.kdex,
  abilityName: 'Fire ability'
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

 const moveset_charmander = new Movesets({
  pokemonName: charmander.pokemonName,
  kdex: charmander.kdex,
  attackNos: [ember_attack.attackNumber],
  attackNames: [ember_attack.attackName]
 });

 const evolution_charmander = new Evolutions({
   evolutionId: charmander.kdex,
   kdex: (charmander.kdex + 1),
   pokemonName: 'Charmeleon'
 })

charmander.save();
ability_charmander.save();
ember_attack.save();
moveset_charmander.save();
evolution_charmander.save();

const bulbasaur = new Pokemon({
  pokemonName: 'Bulbasaur',
  kdex: 1,
  types: ['Grass', 'Poison'],
  description: 'Grass pokemon',
  height: 2.5,
  weight: 32.9
})

const ability_bulbasaur = new Abilities({
  kdex: bulbasaur.kdex,
  abilityName: 'Grass ability'
});

const razorleaf_attack = new Attacks({
  attackNumber: 2,
  attackName: 'Razor Leaf',
  PP: 30,
  power: 55,
  accuracy: 95,
  type: 'Grass',
  category: 'Special'
});

const moveset_bulbasaur = new Movesets({
  pokemonName: bulbasaur.pokemonName,
  kdex: bulbasaur.kdex,
  attackNos: [razorleaf_attack.attackNumber],
  attackNames: [razorleaf_attack.attackName]
});

const evolution_bulbasaur = new Evolutions({
  evolutionId: bulbasaur.kdex,
  kdex: (bulbasaur.kdex + 1),
  pokemonName: 'Ivysaur'
})

bulbasaur.save();
ability_bulbasaur.save();
razorleaf_attack.save();
moveset_bulbasaur.save();
evolution_bulbasaur.save();

const squirtle = new Pokemon({
  pokemonName: 'Squirtle',
  kdex: 7,
  types: ['Water'],
  description: 'Water pokemon',
  height: 3.5,
  weight: 22.9
});

const ability_squirtle = new Abilities({
  kdex: squirtle.kdex,
  abilityName: 'Water Ability'
});

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
  pokemonName: squirtle.pokemonName,
  kdex: squirtle.kdex,
  attackNos: [watergun_attack.attackNumber],
  attackNames: [watergun_attack.attackName]
});

const evolution_squirtle = new Evolutions({
  evolutionId: squirtle.kdex,
  kdex: (squirtle.kdex + 1),
  pokemonName: 'Wartortle'
})

squirtle.save();
ability_squirtle.save();
watergun_attack.save();
moveset_squirtle.save();
evolution_squirtle.save();

module.exports = app;
