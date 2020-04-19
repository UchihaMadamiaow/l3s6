const express = require('express');
const router = express.Router();

const controller =require('../controllers/pricesRest');

router.get('/',controller.list);
router.get('/:priceId',controller.getPrice);
// router.post('/',controller.createPrice);
router.put('/:priceId',controller.updatePrice);
// router.delete('/:priceId',controller.deletePrice);

module.exports= router;
