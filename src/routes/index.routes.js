const { Router } = require('express');
const router = Router();

const { inicio, json } = require('../controllers/index.controller');

router.get('/', inicio);
router.get('/json', json);

module.exports = router;