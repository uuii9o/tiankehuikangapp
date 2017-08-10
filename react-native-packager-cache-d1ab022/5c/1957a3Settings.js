Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/settings/Settings.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Settings = function (_Component) {
    babelHelpers.inherits(Settings, _Component);

    function Settings() {
        babelHelpers.classCallCheck(this, Settings);
        return babelHelpers.possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
    }

    babelHelpers.createClass(Settings, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Settings", navigation: this.props.navigation, scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                _react2.default.createElement(
                    _reactNative.Image,
                    { source: _components.Images.profile, style: style.img, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.add, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        _react2.default.createElement(_nativeBase.Icon, { name: "ios-camera-outline", style: { color: _commonColor2.default.brandSecondary }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        })
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: style.section, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        "GENERAL"
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: _components.Styles.form, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    _react2.default.createElement(_components.Field, { label: "Name", defaultValue: "Paul Jensen", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }),
                    _react2.default.createElement(_components.Field, { label: "Email", defaultValue: "paul@gmail.com", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    }),
                    _react2.default.createElement(_components.Field, { label: "Password", defaultValue: "foobar", secureTextEntry: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }),
                    _react2.default.createElement(
                        _components.Field,
                        { label: "Gender", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        _react2.default.createElement(_components.SingleChoice, { labels: ["Male", "Female"], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        })
                    ),
                    _react2.default.createElement(_components.Field, { label: "Birthday", defaultValue: "May 25, 1983", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    })
                )
            );
        }
    }]);
    return Settings;
}(_react.Component);

exports.default = Settings;

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var style = _reactNative.StyleSheet.create({
    img: {
        width: width,
        height: width * 500 / 750,
        resizeMode: "cover"
    },
    add: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: 25,
        position: "absolute",
        bottom: _commonColor2.default.contentPadding,
        left: _commonColor2.default.contentPadding,
        alignItems: "center",
        justifyContent: "center"
    },
    section: {
        padding: _commonColor2.default.contentPadding * 2,
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    }
});