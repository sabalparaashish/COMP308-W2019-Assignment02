let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "contact_list"
});

module.exports = mongoose.model('assignment002', contactSchema);