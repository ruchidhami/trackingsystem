"use strict";

const Promise = require('bluebird');
const UserService = require('../../services/user.service');
const DeviceService = require('../../services/device.service');
const Constant = require('../../operations/constantCollection');

function createUser(req, res, next) {
  let params = req.body;
  UserService.create(params)
    .then(createdResponse => {
      res.send({
        data: {
          message: "Created Successfully!",
          value: createdResponse,
          action: Constant.POST
        },
        success: true
      })
    })
    .catch(err => {
      next(err);
    })
}

function updateUser(req, res, next) {
  let updateParams = req.body;

  let userId = req.params.id;

  UserService.update(userId, updateParams)
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

function deleteUser(req, res, next) {
  let userId = req.params.id;
  UserService.deleteUser(userId)
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


function listUser(req, res, next) {
  const users = [];
  UserService.findAll()
    .then(fetchDevice => {
      return Promise.each(
        fetchDevice,
        function (user) {
          const userDetail = user.toObject();
          userDetail.devices = [];
          return Promise.each(
            user.deviceIds,
            function (deviceId) {
              return DeviceService.findOne(deviceId)
                .then(result => {
                  delete userDetail.deviceIds;
                  userDetail.devices.push({name: result.name, id: result._id})
                })
            })
            .then(() => {
              users.push(userDetail);
            })
        })
        .then(() => {
          res.send({
            data: {
              message: "Listed Successfully!",
              value: users,
              action: Constant.FETCH
            },
            success: true
          });
        })
    })
    .catch(err => {
      next(err);
    })
}


module.exports = {
  createUser,
  updateUser,
  deleteUser,
  listUser
};