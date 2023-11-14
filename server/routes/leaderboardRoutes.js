```javascript
const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Get leaderboard data
router.get('/', leaderboardController.getLeaderboard);

// Update leaderboard data
router.put('/:id', leaderboardController.updateLeaderboard);

module.exports = router;
```