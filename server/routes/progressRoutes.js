```javascript
const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

// Route to get progress data
router.get('/progress', progressController.getProgressData);

// Route to update progress data
router.put('/progress/:id', progressController.updateProgressData);

module.exports = router;
```