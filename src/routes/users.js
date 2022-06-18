var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cadastrar', UserController.editar);
router.post('/cadastrar', UserController.criar);

router.get('/login', UserController.login);
router.post('/login', UserController.autenticar);



module.exports = router;
