const controller = require('../controllers/usersController.js');
const router = require('express').Router();

router.get('/', controller.signForm);
router.post('/sign', controller.process);
router.get('/profile', controller.profile);
router.get('/signout', controller.signout);

module.exports = router;
