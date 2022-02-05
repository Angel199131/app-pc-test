"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrderSchema = new _mongoose["default"].Schema({
  phone: {
    type: String
  },
  product: [{
    name: String,
    quantity: Number,
    price: Number,
    image: String
  }],
  quantity: {
    type: Number
  },
  price: Number,
  address: String,
  checked: Boolean
});

var _default = _mongoose["default"].model('Order', OrderSchema);

exports["default"] = _default;