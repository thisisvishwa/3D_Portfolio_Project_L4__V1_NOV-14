```javascript
const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/rewardController');

// Route to fetch all rewards
router.get('/', rewardController.getAllRewards);

// Route to fetch a specific reward by id
router.get('/:id', rewardController.getRewardById);

// Route to redeem a reward
router.post('/redeem/:id', rewardController.redeemReward);

// Route to update user reward status
router.put('/update/:id', rewardController.updateRewardStatus);

module.exports = router;
```