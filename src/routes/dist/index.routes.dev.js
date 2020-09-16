"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/index.controllers'),
    renderIndex = _require2.renderIndex,
    renderAbout = _require2.renderAbout;

router.get('/', renderIndex);
router.get('/about', renderAbout);
module.exports = router;