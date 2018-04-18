const express = require('express'),
  router = express.Router();


const UserController = require('../controllers/user.controller');

router.post('/users', UserController.createUser);

router.put('/users/:id', UserController.updateUser);

router.delete('/users/:id', UserController.deleteUser);

router.get('/users', UserController.listUser);


module.exports = router;