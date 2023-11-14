```javascript
const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    achievementName: {
        type: String,
        required: true
    },
    achievementDescription: {
        type: String,
        required: true
    },
    achievementDate: {
        type: Date,
        default: Date.now
    },
    achievementBadge: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Achievement', AchievementSchema);
```