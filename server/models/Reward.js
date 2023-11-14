```javascript
const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
    rewardType: {
        type: String,
        required: true
    },
    criteria: {
        type: String,
        required: true
    },
    userEligibility: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Reward', RewardSchema);
```