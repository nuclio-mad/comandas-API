const express = require('express');
const camareroController = require('../controllers/camareroController');

// Declaro un router
const router = express.Router();

// Rutas
router.get('/', camareroController.getCamareros);
router.post('/', camareroController.addCamarero);

module.exports = router;
