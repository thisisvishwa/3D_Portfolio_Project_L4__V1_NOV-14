```javascript
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Route to get all games
router.get('/', gameController.getAllGames);

// Route to get a specific game by id
router.get('/:id', gameController.getGameById);

// Route to create a new game
router.post('/', gameController.createGame);

// Route to update a game by id
router.put('/:id', gameController.updateGame);

// Route to delete a game by id
router.delete('/:id', gameController.deleteGame);

module.exports = router;
```