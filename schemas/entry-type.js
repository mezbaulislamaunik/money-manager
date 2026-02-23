const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entryTypeSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    isExpense: {
        type: Boolean,
        default: true
    }
});
module.exports = entryTypeSchema;
