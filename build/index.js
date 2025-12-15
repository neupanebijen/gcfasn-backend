'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('dotenv/config');

var _page = require('./routes/page.js');

var _page2 = _interopRequireDefault(_page);

var _util = require('./routes/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

const path = require('path')

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.static('build/build'));

var PORT = process.env.PORT || 3000;
var DB_URI = process.env.DB_URI || 'mongodb+srv://admin:adminpassword@sandbox.a6jbh.mongodb.net/GCFASN?retryWrites=true&w=majority';

app.use('/page', _page2.default);
app.use('/util', _util2.default);


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

_mongoose2.default.connect(DB_URI, { useNewUrlParser: true }, function () {
	console.log('DB connection Success');
});

app.listen(PORT, function () {
	console.log('App running in port ', PORT);
});