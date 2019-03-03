var mongoose = require('mongoose');

var satelliteSchema = mongoose.Schema({
  name: {type: String, default: 'GSAT-14'},
  code: {type: String, default: 's009'},
  type: {type: String, default: 'GSAT'},
  longitude: {type: Number, default: 85},
  latitude: {type: Number, default: 0},
  power: {type: Number, default: 0}
});

module.exports = mongoose.model('Satellite', satelliteSchema);