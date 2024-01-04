const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// router.get('/allGames', gameController.getAllGame);
// router.get('/gameById/:id', gameController.getGameById);
// router.get('/searchGames/:term', gameController.getAllBySearch);

router.post('/login', accountController.postLogin);
router.post('/adminlogin', accountController.adminLogin);
router.get('/customerById/:id', accountController.getCustomerById);


module.exports = router;