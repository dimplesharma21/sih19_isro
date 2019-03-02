var mongoose = require('mongoose');

var satelliteSchema = mongoose.Schema({
  name: String,
  code: String,
  type: String,
  longitude: Number,
  latitude: {type: Number, default: 0}
});

module.exports = mongoose.model('Satellite', satelliteSchema);