```javascript
const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');

// Route to get all achievements
router.get('/', achievementController.getAllAchievements);

// Route to get a specific achievement by id
router.get('/:id', achievementController.getAchievementById);

// Route to create a new achievement
router.post('/', achievementController.createAchievement);

// Route to update an achievement by id
router.put('/:id', achievementController.updateAchievement);

// Route to delete an achievement by id
router.delete('/:id', achievementController.deleteAchievement);

module.exports = router;
```