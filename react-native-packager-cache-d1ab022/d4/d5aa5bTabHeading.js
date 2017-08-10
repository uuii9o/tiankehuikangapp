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

  var platformStyle = variables.platformStyle;
  var platform = variables.platform;

  var tabHeadingTheme = {
    flexDirection: 'row',
    backgroundColor: variables.tabDefaultBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '.scrollable': {
      paddingHorizontal: 20,
      flex: 1,
      minWidth: 60
    },
    'NativeBase.Text': {
      color: variables.topTabBarTextColor,
      marginHorizontal: 7
    },
    'NativeBase.Icon': {
      color: variables.topTabBarTextColor,
      fontSize: 26
    },
    '.active': {
      'NativeBase.Text': {
        color: variables.topTabBarActiveTextColor,
        fontWeight: '600'
      },
      'NativeBase.Icon': {
        color: variables.topTabBarActiveTextColor
      }
    }
  };

  return tabHeadingTheme;
};