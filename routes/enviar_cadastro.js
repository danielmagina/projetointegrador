var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('enviar_cadastro');
});

module.exports = router;