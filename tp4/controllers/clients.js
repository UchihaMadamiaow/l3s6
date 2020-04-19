const Clients = require('../models/clients').model;

var clients =
  (req,res)=>
    res.render(Clients);

module.exports =
  (req,res,next) =>
    res.render('clients',{title:'liste de clients'});
