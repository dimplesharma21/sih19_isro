var express = require('express');
var Terminal = require('../models/satelliteSchema');
var router = express.Router();
var bodyParser = require('body-parser');

//body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", function(req, res){
  Satellite.find({}, function(err, satellites){
    // console.log(terminals);
    res.send(satellites);
  })
});

module.exports = router;