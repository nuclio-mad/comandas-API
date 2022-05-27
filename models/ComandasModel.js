const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComandaSchema = new Schema({
    name: String,
    food: [String],
    camarero: { type: Schema.Types.ObjectId, ref: 'Camarero'},
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente'}
});

module.exports = mongoose.model('Comanda', ComandaSchema);