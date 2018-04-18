"use strict";

const Promise = require('bluebird');

const UserService = require('../services/user.service');

function setup() {
  // const users = {
  //   firstName: 'Aseem',
  //   lastName: 'Gautam',
  //   username: 'agautam'
  // }
  return new Promise((resolve, reject) => {
    UserService.create(users)
      .then(userCreated => {
        resolve(userCreated)
      })
      .catch(err => {
        reject(err);
      })
  })
}

module.exports = {
  setup
};