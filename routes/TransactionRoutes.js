const express = require('express');
const controller = require('../controllers/TransactionController');
const router = express.Router();

/**
 * @swagger
 * /dispersion_funds:
 *   get:
 *     summary: Obtener todas las transacciones
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', controller.getTransacciones);

/**
 * @swagger
 * /dispersion_funds/dispersedClient:
 *   get:
 *     summary: Obtener totales dispersados por cliente
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/dispersedClient', controller.getTotalDispersedByClient);

/**
 * @swagger
 * /dispersion_funds/maximunAmount:
 *   get:
 *     summary: Obtener cliente con mayor monto dispersado
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/maximunAmount', controller.getMaximumAmount);

/**
 * @swagger
 * /dispersion_funds/dayCustomer:
 *   get:
 *     summary: Obtener los totales dispersados agrupados por fecha
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/dayCustomer', controller.getDayCostumer);

/**
 * @swagger
 * /dispersion_funds/averageTransactionCustomer:
 *   get:
 *     summary: Obtener el promedio de las transacciones por cliente. 
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/averageTransactionCustomer', controller.getAverageTransactionCustomer);

/**
 * @swagger
 * /dispersion_funds/top:
 *   get:
 *     summary: Obtener el top 3 de los clientes con mayores montos dispersados. 
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/top', controller.getTop);

module.exports = router;