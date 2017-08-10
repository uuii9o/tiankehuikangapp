Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomIn = undefined;

var _class,
    _temp,
    _jsxFileName = '/Users/yusong1/Desktop/tiankehuikangapp/node_modules/@shoutem/animation/src/animations/ZoomIn.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _DriverShape = require('../drivers/DriverShape');

var ZoomIn = exports.ZoomIn = (_temp = _class = function (_Component) {
  babelHelpers.inherits(ZoomIn, _Component);

  function ZoomIn() {
    babelHelpers.classCallCheck(this, ZoomIn);
    return babelHelpers.possibleConstructorReturn(this, (ZoomIn.__proto__ || Object.getPrototypeOf(ZoomIn)).apply(this, arguments));
  }

  babelHelpers.createClass(ZoomIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children,
          _props$inputRange = _props.inputRange,
          inputRange = _props$inputRange === undefined ? [0, 1] : _props$inputRange,
          _props$maxFactor = _props.maxFactor,
          maxFactor = _props$maxFactor === undefined ? 1.5 : _props$maxFactor,
          style = _props.style;


      return _react2.default.createElement(
        _reactNative.Animated.View,
        {
          style: [style, {
            transform: [{
              scale: driver.value.interpolate({
                inputRange: inputRange,
                outputRange: [1, maxFactor],
                extrapolate: 'clamp'
              })
            }]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        children
      );
    }
  }]);
  return ZoomIn;
}(_react.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react2.default.PropTypes.node,

  inputRange: _react2.default.PropTypes.array,

  maxFactor: _react2.default.PropTypes.number,
  style: _react2.default.PropTypes.object
}, _temp);