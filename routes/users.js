const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', function(req, res, next) {
  console.log(req.body);
  const userName = req.body.userName;
  const password = req.body.password;
  res.send(`respond with a resource with postman ${userName}, ${password}`);
});

module.exports = router;
