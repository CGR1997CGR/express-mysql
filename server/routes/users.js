var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
router.get('/queryAll', function(req, res, next) {
	userDao.queryAll(req, res, next);
});

module.exports = router;
