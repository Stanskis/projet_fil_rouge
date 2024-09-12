const express = require('express');
const router = express.Router();
const cpuController = require('../controllers/productControllers/cpuController');

router.get('/table/cpus', cpuController.getCpuColumns);
router.get('/all_cpus', cpuController.getAllCpus);

module.exports = router;