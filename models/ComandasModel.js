const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComandaSchema = new Schema({
    camarero: String
});

module.exports = mongoose.model('Comanda', ComandaSchema);
