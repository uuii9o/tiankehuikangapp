Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/login/Mark.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var Mark = function (_Component) {
    babelHelpers.inherits(Mark, _Component);

    function Mark() {
        babelHelpers.classCallCheck(this, Mark);
        return babelHelpers.possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).apply(this, arguments));
    }

    babelHelpers.createClass(Mark, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: style.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: "md-checkmark", style: { fontSize: 100, color: "white", backgroundColor: "transparent" }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                })
            );
        }
    }]);
    return Mark;
}(_react.Component);

exports.default = Mark;


var style = _reactNative.StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});