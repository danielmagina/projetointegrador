var express = require('express');
var router = express.Router();

const auth = require ('../middlewares/auth');


router.get('/', (req, res) => {
  res.render('login');
});

module.exports = router;