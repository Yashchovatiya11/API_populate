var mongoose = require('mongoose');

//schema

var product_schema =  mongoose.Schema({
    p_name: {
        type: String
    }
});

//model
module.exports = mongoose.model('product', product_schema);
