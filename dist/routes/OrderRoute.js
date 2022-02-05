"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _OrderController = _interopRequireDefault(require("../controllers/OrderController"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/api/orders').post(_OrderController["default"].createOrder).get(_UserController["default"].requireSignin, _OrderController["default"].readOrders);
router.route('/api/orders/:id').get(_OrderController["default"].readOrder).put(_OrderController["default"].updateOrder);
var _default = router;
exports["default"] = _default;