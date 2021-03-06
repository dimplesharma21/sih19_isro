var Satellite = require('../models/satelliteSchema');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/isro');

var satellites = [
  new Satellite({
    name: 'GSAT-9',
    code: 's001',
    type: 'GSAT',
    latitude: 0,
    longitude: 97.35
  }),
  new Satellite({
    name: 'GSAT-17',
    code: 's002',
    type: 'GSAT',
    latitude: 0,
    longitude: 93.56
  }),
  new Satellite({
    name: 'GSAT-15',
    code: 's003',
    type: 'GSAT',
    latitude: 0,
    longitude: 93.52
  }),
  new Satellite({
    name: 'GSAT-6',
    code: 's004',
    type: 'ISAT',
    latitude: 0,
    longitude: 83.07
  }),
  new Satellite({
    name: 'GSAT-12',
    code: 's005',
    type: 'GSAT',
    latitude: 0,
    longitude: 82.89
  }),
];

var done = 0;

for (var i = 0; i < satellites.length; i++) {
  satellites[i].save(function(err, result) {
    done++;
    if (done === satellites.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}