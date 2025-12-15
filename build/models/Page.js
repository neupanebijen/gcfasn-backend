'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageSchema = _mongoose2.default.Schema({
	pageName: { type: String, unique: true, required: true },
	sections: [{
		marker: { type: String },
		sectionName: { type: String },
		text: [{ type: String }]
	}]
});

var pageModel = _mongoose2.default.model('page', pageSchema);

exports.default = pageModel;