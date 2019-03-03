var mongoose = require('mongoose');

var terminalSchema = mongoose.Schema({
  name: {type: String, default: 'vsat-007'},
  code: {type: String, default: 'v007'},
  state: {type: String, default:'Tamil Nadu'},
  district: {type: String, default: 'Chennai'},
  pincode: {type: Number, default: 789002},
  datarate: {type: Number, default: 5},
  transmission_power: {type: Number, default: 0},
  type: {type: String, default: 'GSAT'}
});

module.exports = mongoose.model('Terminal', terminalSchema);