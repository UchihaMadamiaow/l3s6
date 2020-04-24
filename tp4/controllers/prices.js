const Prices = require('../models/prices').model;

var prices =
  (req,res)=>
    res.render(Prices);

module.exports =
  (req,res,next) =>
    res.render('prices',{title:'liste des prices'});
