'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  deviceIds: {
    type: Array,
    required: true
  },
  firstName: {
    type: String,
    index: true,
    required: true
  },
  lastName: {
    type: String,
    index: true,
    required: true
  },
  username: {
    type: String,
    index: true,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
