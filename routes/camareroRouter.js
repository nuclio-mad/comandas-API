const express = require('express');
const camareroController = require('../controllers/camareroController');

// Declaro un router
const router = express.Router();

// Rutas
router.post('/', camareroController.addCamarero);

module.exports = router;
