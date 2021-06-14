const mongoose = require('mongoose');
const Camarero = require('../models/CamareroModel');

const CamareroController = {
    addCamarero: function(req, res) {
        console.log('Add Camarero');

        const { name } = req.body;
        const newCamarero = new Camarero();
        newCamarero.name = name;

        newCamarero.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error');
            }

            res.send('¡Camarero añadido!');
        } );
    },
    getCamareros: async function(req,res) {
        const camareros = await Camarero.find();
        res.json(camareros)
    }
};

module.exports = CamareroController;
