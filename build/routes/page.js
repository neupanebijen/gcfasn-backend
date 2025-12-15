'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _page = require('../controllers/page.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/getAllPage', _page.getAllPage);

router.post('/getPageByName', _page.getPageByName);

router.post('/addPage', _page.addPage);

router.post('/removePage', _page.removePage);

router.post('/addSection', _page.addSection);

router.post('/editSection', _page.editSection);

router.post('/removeSection', _page.removeSection);
router.post('/removeSection', _page.removeSection);

exports.default = router;