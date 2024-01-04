const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/allGames', gameController.getAllGame);
router.post('/createGame', gameController.createGame);
router.post('/editGame', gameController.editGame);
router.post('/buyGame', gameController.buyGame);
router.get('/gameById/:id', gameController.getGameById);
router.get('/getAllGameByCustomer/:id', gameController.getAllGameByCustomer);
router.get('/deleteGame/:id', gameController.deleteGame);
router.get('/searchGames/:term', gameController.getAllBySearch);
router.get('/tag/:tag', gameController.getAllByTag);


module.exports = router;