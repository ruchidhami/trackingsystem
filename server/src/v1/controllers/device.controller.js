"use strict";

const DeviceService = require('../../services/device.service');
const Constant = require('../../operations/constantCollection');

function createDevice(req, res, next) {
  let params = req.body;
  DeviceService.create(params)
    .then(createdResponse => {
      res.send({
        data: {
          message: "Created Successfully!",
          device: createdResponse,
          action: Constant.POST
        },
        success: true
      })
    })
    .catch(err => {
      next(err);
    })
}

function updateDevice(req, res, next) {
  let updateParams = req.body;

  let deviceId = req.params.id;

  DeviceService.update(deviceId, updateParams)
    .then(() => {
      res.send({
        data: {
          message: "Updated Successfully!",
          value: {},
          action: Constant.UPDATE
        },
        success: true
      })
    })
    .catch(err => {
      next(err);
    })
}

function deleteDevice(req, res, next) {
  let deviceId = req.params.id;
  DeviceService.deleteDevice(deviceId)
    .then(() => {
      res.send({
        data: {
          message: "Deleted Successfully!",
          value: {},
          action: Constant.DELETE
        },
        success: true
      })
    })
    .catch(err => {
      next(err);
    })
}

function listDevices(req, res, next) {
  DeviceService.findAllDevices()
    .then(fetchDevice => {
      res.send({
        data: {
          message: "Listed Successfully!",
          value: fetchDevice,
          action: Constant.FETCH
        },
        success: true
      })
    })
    .catch(err => {
      next(err);
    })
}


module.exports = {
  createDevice,
  updateDevice,
  deleteDevice,
  listDevices
};