var express = require('express');
var router = express.Router();
const ClientesController = require('../controllers/ClientesController')

/* GET home page. */
router.get('/', ClientesController.index);


module.exports = router;

