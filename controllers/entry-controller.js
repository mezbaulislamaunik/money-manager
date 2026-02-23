const entryCrudImpl = require('../repositories/entry/impl/entry-crud-impl');
const ApiResponse = require("../models/api-response");
exports.createEntry = async function (req, res) {
    try {
        await entryCrudImpl.createEntry(req.body);
        console.log(`Expense Crud created successfully.`);
        return res.status(200).json(
            new ApiResponse.Success(`Record created`)
        );
    } catch (error) {
        console.log(`Error during expense creation. ${error.message}`);
    }
}
