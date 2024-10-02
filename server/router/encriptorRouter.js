const express = require('express');
const router = express.Router();
const EncriptorController = require('../controller/encriptorController'); 

router.post('/encriptar', EncriptorController.encriptarPassword); 
router.post('/desencriptar', EncriptorController.desencriptarPassword); 

module.exports = router;