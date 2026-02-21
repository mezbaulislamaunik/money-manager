const express = require('express');
const router = express.Router();
const expenseTypeController = require('../controllers/expense-type-controller');

/**
 * @swagger
 * /expense-type/manage:
 *   post:
 *     summary: Create expense type
 *     tags: [expense-type-controller]
 *     operationId: expenseTypes
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: string
 *                 user_id:
 *                   type: string
 *                   example: string
 *                 name:
 *                   type: string
 *                   example: "Food"
 *     responses:
 *       200:
 *         description: Expense type created successfully
 *         content:
 *             application/json:
 *                  schema:
 *                      type: string
 *                      format: binary
 *       400:
 *         description: Bad Request
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ErrorResponse400"
 *       401:
 *         description: Unauthorized
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ErrorResponse401"
 *       500:
 *         description: Internal Server Error
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ErrorResponse500"
 */
router.post('/manage', expenseTypeController.manageExpenseType);

/**
 * @swagger
 * /expense-type/list:
 *   get:
 *     summary: Get expense types
 *     tags: [expense-type-controller]
 *     operationId: expenseType_list
 *     responses:
 *       200:
 *         description: Expense type list
 *         content:
 *             application/json:
 *                  schema:
 *                      type: string
 *                      format: binary
 *       400:
 *         description: Bad Request
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ErrorResponse400"
 *       401:
 *         description: Unauthorized
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ErrorResponse401"
 *       500:
 *         description: Internal Server Error
 *         content:
 *             application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ErrorResponse500"
 */
router.get('/list', expenseTypeController.getExpenseTypesByUserId);
module.exports = router;
