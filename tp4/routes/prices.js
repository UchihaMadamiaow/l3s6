var express = require('express');
var router = express.Router();

var priceController = require('../controllers/prices');

router.get('/',priceController);
module.exports=router;
