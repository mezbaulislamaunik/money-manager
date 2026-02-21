const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseTypeSchema = new Schema({
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
    }
});

expenseTypeSchema.statics.prepareExpenseType = function (params) {
    return new this({
        _id: params._id,
        user_id: params.user_id,
        name: params.name
    });
}

module.exports = mongoose.model('ExpenseType', expenseTypeSchema);
