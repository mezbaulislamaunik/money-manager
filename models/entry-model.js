const entrySchema = require('../schemas/entry');
const mongoose = require("mongoose");

module.exports = mongoose.model("Entry", entrySchema);
