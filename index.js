// Importaciones - módulos que necesito
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const comandasRouter = require('./routes/comandasRouter');
const clientesRouter = require('./routes/clientesRouter');
const camareroRouter = require('./routes/camareroRouter');

// Instancio mi Express App
const app = express();

mongoose.connect('mongodb://localhost:27017/restaurante', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// Añado el parser para que sepa interpretar x-www-form-urlencoded
// Parser: código que interpreta y entiende una cadena de caracteres
app.use(express.urlencoded({ extended: true }));

// Añadimos el parser para JSON
// De esta forma mi Express es capaz de entender un JSON
app.use(express.json());

app.use(cors());



// Routing
app.use('/comandas', comandasRouter);
app.use('/clientes', clientesRouter);
app.use('/camareros', camareroRouter);

// Arranco mi servidor (trata de arrancarlo!)
app.listen(3000, () => {
    console.log('Servidor rulando');
});
