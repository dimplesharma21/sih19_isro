var Terminal = require('../models/terminalSchema');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/isro');

var terminals = [
  new Terminal({
    name: 'V1',
    code: 'v001',
    state: 'Chhattisgarh',
    district: 'Raipur',
    pincode: 492001,
    datarate: 0,
    transmission_power: 0,
    type: 'GSAT'
  }),
  new Terminal({
    name: 'V2',
    code: 'v002',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    pincode: 453007,
    datarate: 0,
    transmission_power: 0,
    type: 'GSAT'
  }),
  new Terminal({
    name: 'V3',
    code: 'v003',
    state: 'Bihar',
    district: 'Patna',
    pincode: 700984,
    datarate: 0,
    transmission_power: 0,
    type: 'GSAT'
  }),
  new Terminal({
    name: 'V4',
    code: 'v004',
    state: 'Uttar Pradesh',
    district: 'Kanpur',
    pincode: 592608,
    datarate: 0,
    transmission_power: 0,
    type: 'ISAT'
  }),
  new Terminal({
    name: 'V5',
    code: 'v005',
    state: 'Karnataka',
    district: 'Bangalore',
    pincode: 357890,
    datarate: 0,
    transmission_power: 0,
    type: 'GSAT'
  }),
];

var done = 0;

for (var i = 0; i < terminals.length; i++) {
  terminals[i].save(function(err, result) {
    done++;
    if (done === terminals.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}