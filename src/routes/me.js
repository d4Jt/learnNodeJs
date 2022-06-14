const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/courses', meController.showCourses);
router.get('/recycle-bin', meController.recycleBin);
// router.get('/', meController.show);

module.exports = router;
