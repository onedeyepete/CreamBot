const mongoose = require('mongoose');

const TempVoiceChannelSchema = new mongoose.Schema({
    guildId: String,
    triggerChannelId: String,
    tempChannelId: String,
    creatorId: String,
    isActive: Boolean,
});

module.exports = mongoose.model('TempVoiceChannel', TempVoiceChannelSchema);