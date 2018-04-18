"use strict";

const mongoose = require('mongoose');

const User = require('../models/user.model');

function create(userParams) {
  return new Promise((resolve, reject) => {
    let user = new User(userParams);
    user.save()
      .then(userCreated => {
        resolve(userCreated);
      })
      .catch(err => {
        reject(err);
      })

  })
}

function update(userId, params) {
  return new Promise((resolve, reject) => {
    User.update({
      '_id': mongoose.Types.ObjectId(userId)
    }, {
      '$set': params
    })
      .then(updatedResponse => {
        resolve(updatedResponse)
      })
      .catch(err => {
        reject(err);
      })
  })
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    User.findOneAndRemove({"_id": userId})
      .then(userDeleted => {
        resolve(userDeleted)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function findAll() {
  return User.find();
}

module.exports = {
  create,
  update,
  findAll,
  deleteUser
};