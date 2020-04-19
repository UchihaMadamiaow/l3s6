const dbConnection = require('../controllers/db');

const mongoose =require('mongoose');

const clientSchema = new mongoose.Schema({
  nom:String,
  electricite:String,
  gaz:Array,
  eau:Array
});

var Clients = dbConnection.model('Clients',clientSchema,"clients");
module.exports.Schema = clientSchema;
module.exports.model = Clients;
