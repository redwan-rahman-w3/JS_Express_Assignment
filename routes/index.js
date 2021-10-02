var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});



router.get('/:name', function (req, res, next) {
  var name = req.params.name;

  var weatherData = fs.readFileSync('data/weather.json', 'utf8');
  const data = JSON.parse(weatherData);

  
  for (let i in data){


    if(name === data[i].name){
      var wdata = data[i];
  
    }
  }

  res.render('weather', wdata);
});


module.exports = router;