const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    title: String,
    price: Number
});

module.exports = mongoose.model('Menu', MenuSchema);
