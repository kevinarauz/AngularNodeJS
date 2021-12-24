'use strict'

var express = require('express');
var ClienteController = require('../controllers/cliente');

var router = express.Router();
router.post('/cliente', ClienteController.saveCliente);
router.get('/cliente/:id?', ClienteController.getCliente);
router.get('/clientes', ClienteController.getClientes);
router.put('/cliente/:id', ClienteController.updateCliente);
router.delete('/cliente/:id', ClienteController.deleteCliente);

module.exports = router;