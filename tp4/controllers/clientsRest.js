var Client = require('../models/clients').model;

var list =
  (req,res) =>
    Client.find()
      .then(allClients => res.status(200).json(allClients));

var getClient =
  (req,res) =>
    Client.findById(req.params.clientid)
      .then(client => res.status(200).json(client));

var createClient =
  (req,res) =>{
    let newClient ={...req.body};
    Client.create(newClient)
      .then(client => res.status(200).json(client))
      .catch( error => res.status(200).json(error));
  }

var deleteClient =
  (req,res) => {
    console.log(req.params);
    Client.findByIdAndRemove(req.params)
      .then(()=>res.status(200).end());
  }


module.exports.list = list;
module.exports.getClient = getClient;
module.exports.createClient = createClient;
module.exports.deleteClient = deleteClient;
