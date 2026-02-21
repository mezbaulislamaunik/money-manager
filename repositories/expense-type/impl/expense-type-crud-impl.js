const ExpenseType = require('../../../schemas/expense-type');
const SessionContextService = require('../../../services/session-context-service')

class ExpenseTypeCrudImpl {
    static async manageExpenseType(data) {
        try {
            data.user_id = SessionContextService.getUserId();
            const expenseType = ExpenseType.prepareExpenseType(data);
            await ExpenseType.updateOne(
                {
                    _id: expenseType._id,
                    user_id: expenseType.user_id,
                },
                {
                    $set: {
                        name: expenseType.name
                    }
                },
                {
                    upsert: true,
                }
            );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ExpenseTypeCrudImpl;
