"use strict";

var _express = _interopRequireDefault(require("express"));

var _ProductRoute = _interopRequireDefault(require("./routes/ProductRoute"));

var _ImageRoute = _interopRequireDefault(require("./routes/ImageRoute"));

var _UserRoute = _interopRequireDefault(require("./routes/UserRoute"));

var _OrderRoute = _interopRequireDefault(require("./routes/OrderRoute"));

var _path = _interopRequireDefault(require("path"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3000);
app.use(_express["default"].json());
app.use('/', _ProductRoute["default"]);
app.use('/', _ImageRoute["default"]);
app.use('/', _UserRoute["default"]);
app.use('/', _OrderRoute["default"]);
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../public/index.html'));
});
app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port')));
});