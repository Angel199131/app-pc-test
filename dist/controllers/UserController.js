"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserModel = _interopRequireDefault(require("../models/UserModel"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var count, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _UserModel["default"].estimatedDocumentCount();

          case 2:
            count = _context.sent;

            if (!(count >= 1)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.json(null));

          case 5:
            user = new _UserModel["default"](req.body);
            _context.next = 8;
            return user.save();

          case 8:
            res.json(user);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, auxToken;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _UserModel["default"].findOne({
              "name": req.body.name
            });

          case 2:
            user = _context2.sent;

            if (!(user == null)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.json(null));

          case 5:
            if (!user.authenticate(req.body.password)) {
              _context2.next = 10;
              break;
            }

            auxToken = _jsonwebtoken["default"].sign({
              _id: user._id
            }, _config["default"].secretKey);
            return _context2.abrupt("return", res.json({
              token: auxToken
            }));

          case 10:
            res.json(null);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var requireSignin = (0, _expressJwt["default"])({
  secret: _config["default"].secretKey,
  algorithms: ['HS256']
});
var _default = {
  signIn: signIn,
  createUser: createUser,
  requireSignin: requireSignin
};
exports["default"] = _default;