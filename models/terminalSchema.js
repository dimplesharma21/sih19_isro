var mongoose = require('mongoose');

var terminalSchema = mongoose.Schema({
  name: String,
  code: String,
  state: String,
  district: String,
  pincode: Number,
  datarate: Number,
  transmission_power: Number,
  type: String
});

module.exports = mongoose.model('Terminal', terminalSchema);