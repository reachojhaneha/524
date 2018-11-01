const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IotSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    city: {type: String },
});


// Export the model
module.exports = mongoose.model('iot', IotSchema);