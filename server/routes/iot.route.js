const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const iot_controller = require('../controllers/iot.controller');



router.get('/all', iot_controller.getall_data);
router.post('/create', iot_controller.iot_create);

module.exports = router;