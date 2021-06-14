const express = require('express');
const clienteController = require('../controllers/clienteController');

// Declaro un router
const router = express.Router();

// Rutas
router.get('/', clienteController.getClientes);
router.post('/', clienteController.addCliente);

module.exports = router;
