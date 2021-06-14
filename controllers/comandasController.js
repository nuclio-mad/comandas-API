const mongoose = require('mongoose');
const Comanda = require('../models/ComandasModel');

const comandasController = {
    getComandas: async function(req, res) {
        // const listaComandas = await Comanda.find().populate('camarero').populate('cliente');
        Comanda.find().populate('camarero').populate('cliente')
            .then(listaComandas => {
                console.log('entramos y devolvemos data')
                res.json(listaComandas);
            })
            .catch(err => {
                console.log(err)
            })
    },
    addComanda: function(req, res) {
        console.log('Add comanda');

        const { camareroId, clientId, name } = req.body

        const newComanda = new Comanda();
        newComanda.camarero = camareroId;
        newComanda.cliente = clientId;
        newComanda.name = name;

        newComanda.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error', err);
            }

            res.json(savedInfo);
        } );
    }
};

module.exports = comandasController;
