const dbConnection = require('../controllers/db');
const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  resource:String,
  price:Number
})

var Prices = dbConnection.model('prices',priceSchema)
module.exports.schema = priceSchema;
module.exports.model = Prices;
