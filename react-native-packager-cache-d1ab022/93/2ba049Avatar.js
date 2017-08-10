Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/avatar/Avatar.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Images = require("../images/Images");

var _Images2 = babelHelpers.interopRequireDefault(_Images);

var Avatar = (_temp = _class = function (_Component) {
    babelHelpers.inherits(Avatar, _Component);

    function Avatar() {
        babelHelpers.classCallCheck(this, Avatar);
        return babelHelpers.possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
    }

    babelHelpers.createClass(Avatar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                size = _props.size,
                id = _props.id,
                style = _props.style;

            var source = void 0;
            if (id === 1) {
                source = _Images2.default.avatar1;
            } else if (id === 2) {
                source = _Images2.default.avatar2;
            } else if (id === 3) {
                source = _Images2.default.avatar3;
            } else {
                source = _Images2.default.defaultAvatar;
            }
            return _react2.default.createElement(_reactNative.Image, babelHelpers.extends({ source: source }, { style: [style, { width: size, height: size, borderRadius: size / 2 }], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }));
        }
    }]);
    return Avatar;
}(_react.Component), _class.defaultProps = {
    size: 20,
    id: 0
}, _temp);
exports.default = Avatar;