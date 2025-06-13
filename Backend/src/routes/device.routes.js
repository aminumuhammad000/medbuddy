const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/DeviceLog.controller');

router.get('/devices/:user_id', deviceController.showByUser);
router.post('/devices', deviceController.store);

module.exports = router;
