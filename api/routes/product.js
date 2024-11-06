const express = require('express');
const router = express.Router();
const cpuController = require('../controllers/productControllers/cpuController');
const gpuController = require('../controllers/productControllers/gpuController');
const caseController = require('../controllers/productControllers/caseController');
const cpuCoolerController = require('../controllers/productControllers/cpuCoolerController');
const hdController = require('../controllers/productControllers/hdController');
const mbController = require('../controllers/productControllers/mbController');
const psuController = require('../controllers/productControllers/psuController');
const ramController = require('../controllers/productControllers/ramController');

router.get('/table/cpus', cpuController.getCpuColumns);
router.get('/all_cpus', cpuController.getAllCpus);

router.get('/table/gpus', gpuController.getGpuColumns);
router.get('/all_gpus', gpuController.getAllGpus);

router.get('/table/pc_cases', caseController.getCaseColumns);
router.get('/all_cases', caseController.getAllCases);

router.get('/table/cpu_coolers', cpuCoolerController.getCoolerColumns);
router.get('/all_cpu_coolers', cpuCoolerController.getAllCoolers);

router.get('/table/hds', hdController.getHdColumns);
router.get('/all_hds', hdController.getAllHds);

router.get('/table/motherboards', mbController.getMbColumns);
router.get('/all_mbs', mbController.getAllMbs);

router.get('/table/psus', psuController.getPsuColumns);
router.get('/all_psus', psuController.getAllPsus);

router.get('/table/ram', ramController.getRamColumns);
router.get('/all_ram', ramController.getAllRam);

module.exports = router;