const mongoose = require('mongoose');

const tempVoiceBansSchema = new mongoose.Schema({
    discordId: String,
    bannedUsers: [String]
});

module.exports = mongoose.model('TempVoiceBans', tempVoiceBansSchema);
