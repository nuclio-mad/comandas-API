const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComandaSchema = new Schema({
    camarero: { type: Schema.Types.ObjectId, ref: 'Camarero' },
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    name: String
});

module.exports = mongoose.model('Comanda', ComandaSchema);
