'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
