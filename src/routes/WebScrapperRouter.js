const express = require('express');
const router = express.Router();
const controller = require('../controllers/WebScraperController')
router.get('/', controller.get);
module.exports = router;