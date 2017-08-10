Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/Circle.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var Circle = function (_Component) {
    babelHelpers.inherits(Circle, _Component);

    function Circle() {
        babelHelpers.classCallCheck(this, Circle);
        return babelHelpers.possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
    }

    babelHelpers.createClass(Circle, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                size = _props.size,
                color = _props.color,
                style = _props.style;

            var circleStyle = {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: color,
                alignItems: "center",
                justifyContent: "center"
            };
            return _react2.default.createElement(
                _reactNative.View,
                { style: [circleStyle, style], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                },
                this.props.children
            );
        }
    }]);
    return Circle;
}(_react.Component);

exports.default = Circle;