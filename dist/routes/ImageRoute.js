"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ImageController = _interopRequireDefault(require("../controllers/ImageController"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/api/images/:id').get(_ImageController["default"].readImage)["delete"](_UserController["default"].requireSignin, _ImageController["default"].deleteImage);
router.route('/api/images').post(_UserController["default"].requireSignin, _ImageController["default"].uploadImage, _ImageController["default"].createImage).get(_ImageController["default"].readImages);
var _default = router;
exports["default"] = _default;