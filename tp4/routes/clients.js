var express = require('express');
var router = express.Router();

var clientController = require('../controllers/clients');

router.get('/',clientController);
module.exports=router;
