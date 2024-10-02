const express = require('express');
const EncriptorController = require('../controller/encriptorController');

const router = express.Router();

router.post('/',express.json(),EncriptorController.encriptarPassword);
router.post('/',express.json(),encriptorController.desencriptarPassword)

module.exports = router;