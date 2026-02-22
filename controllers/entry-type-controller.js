const entryTypeCrudImpl = require('../repositories/entry-type/impl/entry-type-crud-impl');
const entryTypeListImpl = require('../repositories/entry-type/impl/entry-type-list-by-user-impl');
const {response} = require("express");
const ApiResponse = require("../models/api-response");

exports.manageEntryType = async function (req, res) {
    try {
        await entryTypeCrudImpl.manageEntryType(req.body);
        return res.status(200).json(
            new ApiResponse.Success(`${req.body.isExpense ? 'Expense' : 'Income'} type created`)
        );
    } catch (error) {
        console.log(`Error during type creation. ${error.message}`);
        return res.status(400).json(
            new ApiResponse.Error([error.message], 400)
        );
    }
}

exports.getEntryTypesByUserId = async function (req, res) {
    try {
       const list = await entryTypeListImpl
           .findEntryTypesByUser();
        return res.status(200).json(
            new ApiResponse.Success(list)
        );
    } catch (error) {

    }
}
