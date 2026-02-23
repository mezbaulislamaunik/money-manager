const Entry = require('../../../models/entry-model');
const SessionContextService = require('../../../services/session-context-service')
const mongoose = require("mongoose");

class EntryCrudImpl {
    static async createEntry(data) {
        try {
            data.user_id = SessionContextService.getUserId();
            const {_id, ...updatableFields} = data;
            await Entry.updateOne(
                {
                    _id: new mongoose.Types.ObjectId(data._id),
                },
                {
                    $set: updatableFields
                },
                {
                    upsert: true,
                }
            )
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EntryCrudImpl;
