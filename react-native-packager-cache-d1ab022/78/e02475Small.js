Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/Small.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Small = function (_Component) {
    babelHelpers.inherits(Small, _Component);

    function Small() {
        babelHelpers.classCallCheck(this, Small);
        return babelHelpers.possibleConstructorReturn(this, (Small.__proto__ || Object.getPrototypeOf(Small)).apply(this, arguments));
    }

    babelHelpers.createClass(Small, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactNative.Text,
                { style: [{ fontSize: 12, color: _commonColor2.default.white }, this.props.style], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                this.props.children
            );
        }
    }]);
    return Small;
}(_react.Component);

exports.default = Small;