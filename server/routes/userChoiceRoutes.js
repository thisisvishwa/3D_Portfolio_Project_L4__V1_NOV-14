```javascript
const express = require('express');
const router = express.Router();
const userChoiceController = require('../controllers/userChoiceController');

// Route to get all user choices
router.get('/', userChoiceController.getAllUserChoices);

// Route to get a specific user choice
router.get('/:id', userChoiceController.getUserChoice);

// Route to create a new user choice
router.post('/', userChoiceController.createUserChoice);

// Route to update a user choice
router.put('/:id', userChoiceController.updateUserChoice);

// Route to delete a user choice
router.delete('/:id', userChoiceController.deleteUserChoice);

module.exports = router;
```