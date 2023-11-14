```javascript
const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        required: true
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    achievements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Achievement'
    }],
    progress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Progress'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
```