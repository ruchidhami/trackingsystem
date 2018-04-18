"use strict";

const Device = require('../models/device.model');

/**
 *
 * @param params
 * @returns {Promise}
 */
function create(params) {
  return new Promise((resolve, reject) => {
    let device = new Device(params);
    device.save()
      .then(deviceCreated => {
        resolve(deviceCreated);
      })
      .catch(err => {
        reject(err);
      })

  })
}

/**
 *
 * @param deviceId
 * @param params
 * @returns {Promise}
 */
function update(deviceId, params) {
  return new Promise((resolve, reject) => {
    Device.update({
      '_id': deviceId
    }, {
      '$set': params
    })
      .then(updatedDevice => {
        resolve(updatedDevice)
      })
      .catch(err => {
        reject(err);
      })
  })
}

/**
 *
 * @param deviceId
 * @returns {Promise}
 */
function deleteDevice(deviceId) {
  return new Promise((resolve, reject) => {
    Device.findOneAndRemove({"_id": deviceId})
      .then(deviceDeleted => {
        resolve(deviceDeleted)
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 *
 * @param id
 * @returns {*}
 */
function findAllDevices() {
  return Device.find();
}

function findOne(params) {
  return Device.findOne({'_id': params});
}

module.exports = {
  create,
  update,
  deleteDevice,
  findAllDevices,
  findOne
};