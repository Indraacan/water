var express = require('express');
var router = express.Router();
const monitoring = require('../controller/monitoring')

/* GET users listing. */
router.post('/post', monitoring.create);
router.get('/get', monitoring.showAll);

module.exports = router;
