var express = require('express');
var router = express.Router();
const { boundController } = require('../controllers/boundController');

/* GET users listing. */
router.post('/',  (req, res) => boundController.run(req, res));
module.exports = router;
