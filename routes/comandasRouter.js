const express = require('express');
const comandasController = require('../controllers/comandasController');

// Declaro un router
const router = express.Router();

// Rutas
router.get('/', comandasController.getComandas);
router.post('/', comandasController.addComanda);
router.delete('/', comandasController.deleteComanda);
router.patch('/', comandasController.updateComanda)

module.exports = router;
