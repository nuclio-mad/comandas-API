const mongoose = require('mongoose');
const Comanda = require('../models/ComandasModel');

const comandasController = {
    getComandas: async function(req, res) {
        // const listaComandas = await Comanda.find().populate('camarero').populate('cliente');
        Comanda.find().populate('camarero').populate('cliente')
            .then(listaComandas => {
                res.json(listaComandas);
            })
            .catch(err => {
                console.log(err)
            })
    },
    addComanda: function(req, res) {
        const { camareroId, clientId, name } = req.body

        const newComanda = new Comanda();
        newComanda.camarero = camareroId;
        newComanda.cliente = clientId;
        newComanda.name = name;

        newComanda.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error', err);
            }
            console.log(savedInfo)
            res.json(savedInfo);
        } );
    },
    deleteComanda: async function(req, res) {
        const { id } = req.body
        await Comanda.deleteOne({_id: id })
        res.send('holaaaaa')
    },
    updateComanda: async function(req, res) {
        const { id, name } = req.body
        const data = await Comanda.findOneAndUpdate({_id: id}, { name }, {new: true})
        res.json(data)
    }
};

module.exports = comandasController;
