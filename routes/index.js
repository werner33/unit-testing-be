var express = require('express');
var router = express.Router();

const divCount = require('../utils/divCount');

router.get('/divCount', function(req, res, next) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  let k = Number(req.query.k);

  let count = divCount(a, b, k);

  let integerCount;

  if(count == 1){
    integerCount = 'is 1 integer';
  } else if (count ==  0){
    integerCount = 'are no integers';
  } else {
    integerCount = `are ${count} integers`;
  }

  res.send(`There ${integerCount} divisible by ${k}, between ${a} and ${b}.`);
});

module.exports = router;
