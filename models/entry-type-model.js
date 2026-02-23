const entryTypeSchema = require('../schemas/entry-type');
const mongoose = require("mongoose");

module.exports = mongoose.model('EntryType', entryTypeSchema);
