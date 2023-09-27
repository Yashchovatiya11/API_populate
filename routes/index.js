var express = require('express');
var router = express.Router();

var user = require('../controller/productcontroller');

router.post('/product',user.put_product);

router.post('/subproduct',user.put_subproduct);

router.get('/getproduct',user.get_product);

router.get('/getsubproduct',user.get_subproduct);


module.exports = router;
