Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _platform = require('./../variables/platform');

var _platform2 = babelHelpers.interopRequireDefault(_platform);

exports.default = function () {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _platform2.default;

  var checkBoxTheme = {
    '.checked': {
      'NativeBase.Icon': {
        color: "transparent"
      },
      'NativeBase.IconNB': {
        color: "transparent"
      },
      backgroundColor: "white"
    },
    'NativeBase.Icon': {
      color: 'transparent',
      lineHeight: variables.CheckboxIconSize,
      marginTop: variables.CheckboxIconMarginTop,
      fontSize: variables.CheckboxFontSize
    },
    'NativeBase.IconNB': {
      color: 'transparent',
      lineHeight: variables.CheckboxIconSize,
      marginTop: variables.CheckboxIconMarginTop,
      fontSize: variables.CheckboxFontSize
    },
    borderRadius: variables.CheckboxRadius,
    backgroundColor: "rgba(255, 255, 255, .5)",
    overflow: 'hidden',
    width: variables.checkboxSize,
    height: variables.checkboxSize,
    borderWidth: 0,
    paddingLeft: variables.CheckboxPaddingLeft - 1,
    paddingBottom: variables.CheckboxPaddingBottom,
    left: 10
  };

  return checkBoxTheme;
};