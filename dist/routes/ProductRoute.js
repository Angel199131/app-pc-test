"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ProductController = _interopRequireDefault(require("../controllers/ProductController"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/api/products').get(_ProductController["default"].readProducts).post(_UserController["default"].requireSignin, _ProductController["default"].createProduct);
var _default = router;
exports["default"] = _default;