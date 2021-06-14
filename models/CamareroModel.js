const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CamareroSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Camarero', CamareroSchema);
