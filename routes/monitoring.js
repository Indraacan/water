var express = require('express');
var router = express.Router();
const monitoring = require('../controller/monitoring')

/* GET users listing. */
router.post('/create', monitoring.create);
router.get('/show', monitoring.showAll);

module.exports = router;
