const expenseTypeCrudImpl = require('../repositories/expense-type/impl/expense-type-crud-impl');
const expenseTypeListImpl = require('../repositories/expense-type/impl/expense-type-list-by-user-impl');
const {response} = require("express");
const ApiResponse = require("../models/api-response");

exports.manageExpenseType = async function (req, res) {
    try {
        await expenseTypeCrudImpl.manageExpenseType(req.body);
        return res.status(200).json(
            new ApiResponse.Success(`Expense type created`)
        );
    } catch (error) {
        console.log(`Error during expense type creation. ${error.message}`);
    }
}

exports.getExpenseTypesByUserId = async function (req, res) {
    try {
       const list = await expenseTypeListImpl
           .findExpenseTypeListByUser();
       console.log(list);
        return res.status(200).json(
            new ApiResponse.Success(list)
        );
    } catch (error) {

    }
}
