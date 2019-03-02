var express = require('express');
var Satellite = require('../models/satelliteSchema');
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

router.post("/",function(req,res){
  var satellite = new Satellite(req.body)
  satellite.save(function(err){
      if(err)
        console.log(err);
      else
        res.send(satellite);
        // console.log(terminal);
   })
});

module.exports = router;