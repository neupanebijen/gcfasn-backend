'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeSection = exports.editSection = exports.addSection = exports.removePage = exports.addPage = exports.getPageByName = exports.getAllPage = undefined;

require('regenerator-runtime/runtime')
var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Page = require('../models/Page.js');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getAllPage = exports.getAllPage = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
		var result;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return _Page2.default.find({});

					case 3:
						result = _context.sent;


						res.json(result);
						_context.next = 10;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](0);

						res.json({ "error": _context.t0.toString() });

					case 10:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 7]]);
	}));

	return function getAllPage(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

var getPageByName = exports.getPageByName = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
		var pageName, condition, result;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						pageName = req.body.pageName;
						condition = {
							pageName: pageName
						};
						_context2.prev = 2;
						_context2.next = 5;
						return _Page2.default.findOne(condition);

					case 5:
						result = _context2.sent;


						res.json(result);
						_context2.next = 12;
						break;

					case 9:
						_context2.prev = 9;
						_context2.t0 = _context2['catch'](2);

						res.json({ "error": _context2.t0.toString() });

					case 12:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[2, 9]]);
	}));

	return function getPageByName(_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}();

var addPage = exports.addPage = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
		var pageName, value, result;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						pageName = req.body.pageName;
						value = {
							pageName: pageName
						};
						_context3.prev = 2;
						_context3.next = 5;
						return _Page2.default.create(value);

					case 5:
						result = _context3.sent;


						res.json(result);
						_context3.next = 13;
						break;

					case 9:
						_context3.prev = 9;
						_context3.t0 = _context3['catch'](2);

						console.log(_context3.t0);
						res.json({ error: _context3.t0.toString() });

					case 13:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined, [[2, 9]]);
	}));

	return function addPage(_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}();

var removePage = exports.removePage = function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
		var pageId, condition, result;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						pageId = req.body.pageId;
						condition = {
							_id: _mongoose2.default.Types.ObjectId(pageId)
						};
						_context4.prev = 2;
						_context4.next = 5;
						return _Page2.default.deleteOne(condition);

					case 5:
						result = _context4.sent;


						res.json(result);
						_context4.next = 12;
						break;

					case 9:
						_context4.prev = 9;
						_context4.t0 = _context4['catch'](2);

						res.json({ error: _context4.t0.toString() });

					case 12:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined, [[2, 9]]);
	}));

	return function removePage(_x7, _x8) {
		return _ref4.apply(this, arguments);
	};
}();

var addSection = exports.addSection = function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
		var _req$body, pageId, sectionName, marker, text, section, condition, update, options, result;

		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_req$body = req.body, pageId = _req$body.pageId, sectionName = _req$body.sectionName, marker = _req$body.marker, text = _req$body.text;
						section = {
							sectionName: sectionName,
							marker: marker,
							text: text
						};
						condition = {
							_id: _mongoose2.default.Types.ObjectId(pageId)
						};
						update = {
							$push: {
								sections: section
							}
						};
						options = {
							new: true
						};
						_context5.prev = 5;
						_context5.next = 8;
						return _Page2.default.findOneAndUpdate(condition, update, options);

					case 8:
						result = _context5.sent;


						res.json(result);
						_context5.next = 15;
						break;

					case 12:
						_context5.prev = 12;
						_context5.t0 = _context5['catch'](5);

						res.json({ error: _context5.t0.toString() });

					case 15:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, undefined, [[5, 12]]);
	}));

	return function addSection(_x9, _x10) {
		return _ref5.apply(this, arguments);
	};
}();

var editSection = exports.editSection = function () {
	var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
		var _req$body2, pageId, sectionId, sectionName, marker, text, section, condition, update, result;

		return regeneratorRuntime.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						_req$body2 = req.body, pageId = _req$body2.pageId, sectionId = _req$body2.sectionId, sectionName = _req$body2.sectionName, marker = _req$body2.marker, text = _req$body2.text;
						section = {
							sectionName: sectionName,
							marker: marker,
							text: text
						};
						condition = {
							_id: _mongoose2.default.Types.ObjectId(pageId),
							'sections._id': _mongoose2.default.Types.ObjectId(sectionId)
						};
						update = {
							$set: {
								'sections.$': section
							}
						};
						_context6.prev = 4;
						_context6.next = 7;
						return _Page2.default.updateOne(condition, update);

					case 7:
						result = _context6.sent;


						res.json(result);
						_context6.next = 14;
						break;

					case 11:
						_context6.prev = 11;
						_context6.t0 = _context6['catch'](4);

						res.json({ "error": _context6.t0.toString() });

					case 14:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, undefined, [[4, 11]]);
	}));

	return function editSection(_x11, _x12) {
		return _ref6.apply(this, arguments);
	};
}();

var removeSection = exports.removeSection = function () {
	var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
		var _req$body3, pageId, sectionId, condition, update, result;

		return regeneratorRuntime.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_req$body3 = req.body, pageId = _req$body3.pageId, sectionId = _req$body3.sectionId;
						condition = {
							_id: _mongoose2.default.Types.ObjectId(pageId)
						};
						update = {
							$pull: {
								sections: { '_id': _mongoose2.default.Types.ObjectId(sectionId) }
							}
						};
						_context7.prev = 3;
						_context7.next = 6;
						return _Page2.default.findOneAndUpdate(condition, update);

					case 6:
						result = _context7.sent;


						res.json(result);
						_context7.next = 13;
						break;

					case 10:
						_context7.prev = 10;
						_context7.t0 = _context7['catch'](3);

						res.json({ "error": _context7.t0.toString() });

					case 13:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, undefined, [[3, 10]]);
	}));

	return function removeSection(_x13, _x14) {
		return _ref7.apply(this, arguments);
	};
}();