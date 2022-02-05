"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  price: Number,
  image: {
    type: String
  }
});

var _default = _mongoose["default"].model('Product', ProductSchema);

exports["default"] = _default;