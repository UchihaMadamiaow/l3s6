var Prices = require('../models/prices').model;

var list =
  (req,res) =>
    Prices.find()
      .then(allPris => res.render(allPris));

var getPrice =
  (req,res) =>
    Prices.findById(req.params.priceId)
      .then( pri => res.status(200).json(pri));

// var createPrice =
//   (res,req) =>{
//     let newPri = {...req.body};
//     Prices.create(newPri)
//       .then(pri => res.status(200).json(pri))
//       .catch(error => res.status(400).json(error));
//   }

var updatePrice =
  (res,req)=>{
    let updatePri = {...req.body};
    Prices.findByIdAndUpdate(req.params.priceId)
      .then(pri => res.status(200).json(etudiant));
  }

// var deletePrice =
//   (res,req) => {
//     console.log(req.params);
//     Prices.findByIdAndRemove(req.param.priceId)
//       .then(()=>res.status(200).end());
//   }

module.exports.list =list;
module.exports.getPrice = getPrice;
// module.exports.createPrice = createPrice;
module.exports.updatePrice = updatePrice;
// module.exports.deletePrice = deletePrice;
