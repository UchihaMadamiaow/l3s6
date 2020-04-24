var Prices = require('../models/prices').model;

var list =
  (req,res) =>
    Prices.find()
      .then(allPris => res.status(200).json(allPris));

var getPrice =
  (req,res) =>
    Prices.findById(req.params.priceId)
      .then( pri => res.status(200).json(pri));


var updatePrice =
  (req,res)=>{
    let updatedPrice = {...req.body};
    Prices.findByIdAndUpdate(req.params.priceId,updatedPrice,{new : true})
      .then(pri => res.status(200).json(pri));
  }


module.exports.list =list;
module.exports.getPrice = getPrice;
// module.exports.createPrice = createPrice;
module.exports.updatePrice = updatePrice;
// module.exports.deletePrice = deletePrice;
