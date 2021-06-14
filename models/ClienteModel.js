const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Cliente', ClienteSchema);
