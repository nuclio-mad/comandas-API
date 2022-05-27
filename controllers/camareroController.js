const Camarero = require('../models/CamareroModel');

const CamareroController = {
    getCamareros: async (req, res) => {
        const camareros = await Camarero.find();
        res.json(camareros);
     },
    addCamarero: function (req, res) {
        //const name = req.body.name;
        const { name } = req.body;

        const newCamarero = new Camarero();
        newCamarero.name = name;

        newCamarero.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error', err);
            }

            res.send(`¡Camarero añadido con esta info: ${savedInfo}!`);
        } );
     }
    
}
module.exports = CamareroController;
