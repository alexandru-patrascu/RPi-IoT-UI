const express = require('express');

const LedCtrl = require('../controllers/led-ctrl');

const router = express.Router();

router.get('/leds', LedCtrl.getLeds);
router.get('/led/:_id', LedCtrl.getLedById);
router.post('/led', LedCtrl.createLed);
router.put('/led/:_id', LedCtrl.updateLed);
router.delete('/led/:_id', LedCtrl.deleteLed);

module.exports = router;
