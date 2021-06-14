
const Cliente = require('../models/ClienteModel');

const ClienteController = {
    addCliente: function(req, res) {
        console.log('Add Cliente');

        const { name } = req.body;
        const newCliente = new Cliente();
        newCliente.name = name;
        console.log('this is the new client', newCliente)

        newCliente.save( (err, savedInfo) => {
            if(err) {
                console.log('Ha ocurrido un error', err);
            }

            res.send('¡Cliente añadido!');
        } );
    }
};

module.exports = ClienteController;
