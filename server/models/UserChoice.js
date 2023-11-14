```javascript
const mongoose = require('mongoose');

const UserChoiceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    choiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Choice',
        required: true
    },
    choiceMade: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserChoice', UserChoiceSchema);
```