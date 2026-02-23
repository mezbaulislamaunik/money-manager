const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EntryTypeSchema = require('./entry-type');

const entrySchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    type: {
        type: EntryTypeSchema,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = entrySchema;
