Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _platform = require('./../variables/platform');

var _platform2 = babelHelpers.interopRequireDefault(_platform);

exports.default = function () {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _platform2.default;

  var inputTheme = {
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    fontSize: variables.inputFontSize,
    lineHeight: variables.inputLineHeight
  };

  return inputTheme;
};