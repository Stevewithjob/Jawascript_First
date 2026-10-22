// controller obsatarava logiku zpracovani pozadavku
const controller = require('../controllers/itemsController');

// miniaplikace s routerem
const router = require('express').Router();

// co router umi smerovat na controller
router.get('/', controller.zobrazitClanky);
router.get('/delete/:id', controller.smazatClanek);
router.post('/new', controller.pridatClanek);

// vystaveni routeru ven pro budouci require
module.exports = router;