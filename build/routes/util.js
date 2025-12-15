'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/sendMail', function (req, res) {
	var userData = req.body.userData;

	console.log(userData);

	var transporter = _nodemailer2.default.createTransport({
		service: 'gmail',
		auth: {
			user: 'gcfedunp@gmail.com',
			pass: 'gcfedunp123@'
		}
	});

	var mailOptions = {
		from: 'gcfedunp@gmail.com',
		to: 'gcfedunp@gmail.com',
		subject: 'Admission Email',
		text: 'Data : ' + JSON.stringify(userData)
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.status(200).json({ success: true });
		}
	});
});

exports.default = router;