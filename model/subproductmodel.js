var mongoose = require('mongoose');

//schema

var sub_product_schema = new mongoose.Schema({
    s_name: {
        type: String
    },
    price: {
        type: String
    },
    p_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }

});

//model
module.exports = mongoose.model('sub_product', sub_product_schema);
