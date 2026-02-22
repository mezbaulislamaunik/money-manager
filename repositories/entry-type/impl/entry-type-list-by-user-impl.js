const EntryType = require('../../../schemas/entry-type');
const SessionContextService = require('../../../services/session-context-service')

class EntryTypeListByUserImpl {
    static async findEntryTypesByUser() {
        try {
            return await EntryType
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

module.exports = EntryTypeListByUserImpl;
