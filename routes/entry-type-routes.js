const express = require('express');
const router = express.Router();
const entryTypeController = require('../controllers/entry-type-controller');

/**
 * @swagger
 * /entry-type/manage:
 *   post:
 *     summary: Create entry type
 *     tags: [entry-type-controller]
 *     operationId: expenseTypes
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 name:
 *                   type: string
 *                   example: "Food"
 *                 isExpense:
 *                  type: boolean
 *                  example: true
 *     responses:
 *       200:
 *         description: Entry type created successfully
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
router.post('/manage', entryTypeController.manageEntryType);

/**
 * @swagger
 * /entry-type/list:
 *   get:
 *     summary: Get entry types
 *     tags: [entry-type-controller]
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
router.get('/list', entryTypeController.getEntryTypesByUserId);
module.exports = router;
