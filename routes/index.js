var express = require('express');
var {addModel} = require('../database/db')
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  new addModel({number:1}).save().then(
    res.send({
      code:200
    })
  )
});

module.exports = router;
