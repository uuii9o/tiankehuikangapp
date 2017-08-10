Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/profile/Profile.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Profile = function (_Component) {
    babelHelpers.inherits(Profile, _Component);

    function Profile() {
        babelHelpers.classCallCheck(this, Profile);
        return babelHelpers.possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    babelHelpers.createClass(Profile, [{
        key: "render",
        value: function render() {
            var today = (0, _moment2.default)();
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Paul Jensen", navigation: this.props.navigation, scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                _react2.default.createElement(_reactNative.Image, { source: _components.Images.profile, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: style.row, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.H1,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        today.format("MMMM")
                    ),
                    _react2.default.createElement(
                        _nativeBase.Text,
                        { style: { textAlign: "center" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        "Good job! 9% more completed tasks this month."
                    )
                ),
                _react2.default.createElement(_components.TaskOverview, { completed: 49, overdue: 8, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                })
            );
        }
    }]);
    return Profile;
}(_react.Component);

exports.default = Profile;

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var style = _reactNative.StyleSheet.create({
    img: {
        width: width,
        height: width * 500 / 750,
        resizeMode: "cover"
    },
    row: {
        justifyContent: "center",
        alignItems: "center",
        padding: _commonColor2.default.contentPadding * 2
    }
});