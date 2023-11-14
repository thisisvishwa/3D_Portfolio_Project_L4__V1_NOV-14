```javascript
const express = require('express');
const router = express.Router();
const easterEggController = require('../controllers/easterEggController');

// Route to get all easter eggs
router.get('/', easterEggController.getAllEasterEggs);

// Route to get a specific easter egg by id
router.get('/:id', easterEggController.getEasterEggById);

// Route to create a new easter egg
router.post('/', easterEggController.createEasterEgg);

// Route to update an easter egg
router.put('/:id', easterEggController.updateEasterEgg);

// Route to delete an easter egg
router.delete('/:id', easterEggController.deleteEasterEgg);

module.exports = router;
```