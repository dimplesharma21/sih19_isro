var mongoose = require('mongoose');

var terminalSchema = mongoose.Schema({
  name: String,
  code: String,
  state: String,
  district: String,
  pincode: Number
});

module.exports = mongoose.model('Terminal', terminalSchema);