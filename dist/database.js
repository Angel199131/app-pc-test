"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URI = 'mongodb://localhost/app-pc-test';

_mongoose["default"].connect(process.env.MONGODB_URI || URI).then(function () {
  return console.log('Db is connected');
});