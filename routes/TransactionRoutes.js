const express = require('express');
const controller = require('../controllers/TransactionController');
const router = express.Router();

router.get('/', controller.getTransacciones);
router.get('/dispersedClient', controller.getTotalDispersedByClient);
router.get('/maximunAmount', controller.getMaximumAmount);
router.get('/dayCustomer', controller.getDayCostumer);
router.get('/averageTransactionCustomer', controller.getAverageTransactionCustomer);
router.get('/top', controller.getTop);

module.exports = router;