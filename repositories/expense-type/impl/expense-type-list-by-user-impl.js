const ExpenseType = require('../../../schemas/expense-type');
const SessionContextService = require('../../../services/session-context-service')

class ExpenseTypeListByUserImpl {
    static async findExpenseTypeListByUser() {
        try {
            return await ExpenseType
                .find(
                    {
                        user_id: SessionContextService.getUserId(),
                    },
                    {
                        name: 1
                    }
                );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ExpenseTypeListByUserImpl;
