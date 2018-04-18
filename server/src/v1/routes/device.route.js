const express = require('express'),
  router = express.Router();


const DeviceController = require('../controllers/device.controller');

router.post('/devices', DeviceController.createDevice);

router.put('/devices/:id', DeviceController.updateDevice);

router.delete('/devices/:id', DeviceController.deleteDevice);

router.get('/devices', DeviceController.listDevices);


module.exports = router;