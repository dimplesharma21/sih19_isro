var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path=require('path'); 

//mongodb connection
// mongoose.connect('mongodb://localhost/isro');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// schema
var models = require('./models/terminalSchema');
var terminals = require('./routes/terminals');
var lookangle = require('./routes/lookangle');
var satellites = require('./routes/satellites');
var cors = require('cors')

app.use(cors());

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//view enjine
app.set('view engine','ejs');

//static files
app.use(express.static(path.join(__dirname,'public')));

app.use(function(req, res, next) {
    req.resources = req.resources || {};
   // res.locals.app = config.app;
    res.locals.currentUser = req.terminal;
    res.locals._t = function (value) { return value; };
    res.locals._s = function (obj) { return JSON.stringify(obj); };
    next();
})

app.get('/', function(req, res){
	console.log("home");
})

//routes
app.use('/lookangle',lookangle);
app.use('/satellites',satellites);
app.use('/terminals',terminals);

//hosting

let port_number = process.env.PORT || 3000;
app.listen(port_number);
