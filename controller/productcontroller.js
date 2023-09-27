var product_model = require('../model/productmodel');
var sub_productmodel = require('../model/subproductmodel');

exports.put_product = async (req, res) => {
    console.log(req.body);
   var data = await product_model.create(req.body)

    res.status(200).json({
        status: 'success',
        data
    });
}

exports.put_subproduct = async (req, res) => {

    var data = await sub_productmodel.create(req.body)

    res.status(200).json({
        status: 'success',
        data
    });

}

exports.get_product = async (req, res) => {

    var data = await product_model.find();

    res.status(200).json({
        status: 'success',
        data
    });
};

exports.get_subproduct = async (req, res) => {

    var data = await sub_productmodel.find().populate("p_id");

    res.status(200).json({
        status: 'success',
        data
    });
};