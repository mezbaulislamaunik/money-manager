const EntryType = require('../../../schemas/entry-type');
const mongoose = require('mongoose');
const SessionContextService = require('../../../services/session-context-service')

class EntryTypeCrudImpl {
    static async manageEntryType(data) {
        try {
            data.user_id = SessionContextService.getUserId();
            return await EntryType.updateOne(
                {
                    _id: new mongoose.Types.ObjectId(data._id),
                    user_id: data.user_id,
                },
                {
                    $set: {
                        name: data.name,
                        isExpense: data.isExpense,
                    }
                },
                {
                    upsert: true,
                }
            );
        } catch (error) {
            console.log(`Error from entry type crud impl: ${error.message}`);
            throw error;
        }
    }
}

module.exports = EntryTypeCrudImpl;
