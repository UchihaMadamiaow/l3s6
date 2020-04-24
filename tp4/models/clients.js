const dbConnection = require('../controllers/db');

const mongoose =require('mongoose');

const clientSchema = new mongoose.Schema({
  nom:String,
  electricite:[Number],
  gaz:[Number],
  eau:[Number]
});

var Clients = dbConnection.model('clients',clientSchema);
module.exports.Schema = clientSchema;
module.exports.model = Clients;
