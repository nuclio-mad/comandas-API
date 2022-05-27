const mongoose = require('mongoose');
const Comanda = require('../models/ComandasModel');

const comandasController = {
    getComandas: async function (req, res) {
        const comandas = await Comanda.find().populate('camarero').populate('cliente', 'name');
        res.json(comandas);
    },
    addComanda: function (req, res) {
        const { name, food, camareroId, clienteId } = req.body;

        const newComanda = new Comanda();
        newComanda.name = name;
        newComanda.food = food;
        newComanda.camarero = camareroId;
        newComanda.cliente = clienteId;

        newComanda.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error', err);
                res.status(500).send('Ha ocurrido un error')
            }

            res.send(`¡Comanda añadida con esta info: ${savedInfo}`);
        } );
    },
    deleteComanda: async function (req, res) {
        const { comandaId } = req.body;

        const comandaToBeDelete = await Comanda.findOneAndDelete( {_id: comandaId} );    
        res.send("¡Comanda eliminada con éxito!", 200);
    },
    updateComanda: async function (req, res) {
        const { comandaId, foodAdded } = req.body;

        const comandaToBeUpdated = await Comanda.findOneAndUpdate({_id: comandaId}, {"$push": {"food": foodAdded}});
        // const comandaToBeUpdated = await Comanda.findOne({_id: comandaId})
        // comandaToBeUpdated.food.push(foodAdded);


        comandaToBeUpdated.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error', err);
            }

            res.send(`¡Comanda updated: ${savedInfo}!`);
        } );
    }
};

module.exports = comandasController;