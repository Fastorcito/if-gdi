const express = require('express');
const ComprobanteController = require('../controllers/ComprobanteController');

const router = express.Router();

router.get('/comprobantes', ComprobanteController.index);
router.get('/create', ComprobanteController.create);
router.post('/create', ComprobanteController.insertar);

module.exports = router;