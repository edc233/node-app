var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(req.body)
  res.send({
    code:200,
    data:{
      msg:'登录成功'
    }
  });
});

module.exports = router;
