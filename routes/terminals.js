var express = require('express');
var Terminal = require('../models/terminalSchema');
var router = express.Router();
var bodyParser = require('body-parser');

//body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", function(req, res){
  Terminal.find({}, function(err, terminals){
    // console.log(terminals);
    res.send(terminals);
  })
});

router.post("/",function(req,res){
  var terminal = new Terminal(req.body)
  terminal.save(function(err){
      if(err)
        console.log(err);
      else
        res.send(terminal);
        // console.log(terminal);
   })
});

router.get("/:id", function(req, res){
  Terminal.findOne({code:req.params.id}, function(err, terminal){
    // console.log(terminal);
  res.send(terminal);
  })
});

module.exports = router;