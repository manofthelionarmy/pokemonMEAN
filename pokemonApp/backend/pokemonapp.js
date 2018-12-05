const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const pokemonRoutes = require('./routes/pokemon');

const app = express();
/**Rolly's cloudmongoURL */
//const cloudmongoUrl = 'mongodb+srv://mando:1KBNWdXuNKTAJb3e@cluster0-ewz1r.mongodb.net/pokemon?retryWrites=true';

/**Armando's cloudmongoURL */
const cloudmongoUrl = 'mongodb+srv://mando:1KBNWdXuNKTAJb3e@cluster0-ewz1r.mongodb.net/pokemon?retryWrites=true';
/**URL for the local machine */
// const cloudmongoUrl = 'mongodb://localhost:27017/data';
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
});

app.use(pokemonRoutes);

module.exports = app;
