function calc(form, l, n, s) {  	// Function parameter names correspond to table variables

// VARIABLES USED IN CALCULATIONS                

		var azi;         
		var ele;         
		var g = (s - n);  

// CONVERSIONS TO RADIANS???       

		var grad = (g / 57.29578);         
		var lrad = (l / 57.29578); 
		// var nrad = (n / 57.29578); 
		// var srad = (s / 57.29578); 

// AZIMUTH CALCULATIONS                  

		azi = (3.14159 -         
		(-Math.atan((Math.tan(grad)/Math.sin(lrad)))));         
		
		form.azimuth.value = azi * 57.29578;          

// ELEVATION CALCULATIONS          
		a = Math.cos(grad);         
		b = Math.cos(lrad);          
		ele = Math.atan((a * b -.1512)/(Math.sqrt(1 - (a*a) * (b*b))));         
		
		form.elevation.value = ele * 57.29578; 
} 

var express = require('express');
// var Terminal = require('../models/terminalSchema');
var router = express.Router();
var bodyParser = require('body-parser');

//body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/",function(req,res){
    console.log(req.body);
    console.log(req.body.district)
   //  var terminal = new Terminal(req.body)

   //  terminal.save(function(err){
   //    if(err)
   //      console.log(err);
   //    else
   //      res.send(terminal);
   //      // console.log(terminal);
   // })
});

router.get("/:id", function(req, res){
  Terminal.findOne({code:req.params.id}, function(err, terminal){
    // console.log(terminal);
  res.send(terminal);
  })
});

module.exports = router;