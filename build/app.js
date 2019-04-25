"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _yamljs = _interopRequireDefault(require("yamljs"));

var _logger = _interopRequireDefault(require("./config/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 8000;

var swaggerDocument = _yamljs["default"].load('./swagger.yaml');

app.use((0, _morgan["default"])('tiny', {
  stream: _logger["default"].stream
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerDocument));
app.get('/', function (req, res) {
  res.status(200).json({
    Appname: 'Banka-lite'
  });
});
app.listen(port, function () {
  return _logger["default"].debug("Application running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;