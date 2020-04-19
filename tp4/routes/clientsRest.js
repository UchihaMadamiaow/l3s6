const express = require('express');
const router = express.Router();

const controller =require('../controllers/clientsRest');

router.get('/',controller.list);
router.get('/:clientId',controller.getClient);
router.post('/',controller.createClient);
// router.put('/:clientId',controller.updateClient);
router.delete('/:clientId',controller.deleteClient);

module.exports= router;
