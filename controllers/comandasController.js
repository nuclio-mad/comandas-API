const mongoose = require('mongoose');
const Comanda = require('../models/ComandasModel');

mongoose.connect('mongodb://localhost:27017/restaurante', { useNewUrlParser: true, useUnifiedTopology: true });

const comandasController = {
    getComandas: async function(req, res) {
        const listaComandas = await Comanda.find();
        console.log('Get comandas', listaComandas);

        res.json(listaComandas);
    },
    addComanda: function(req, res) {
        console.log('Add comanda');

        const newComanda = new Comanda();
        newComanda.camarero = 'Horse Luis';

        newComanda.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error');
            }

            res.send('¡Comanda añadida!');
        } );
    }
};

module.exports = comandasController;
