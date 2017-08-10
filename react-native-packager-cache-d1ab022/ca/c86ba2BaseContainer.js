Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/BaseContainer.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _vectorIcons = require("@expo/vector-icons");

var _Avatar = require("./avatar/Avatar");

var _Avatar2 = babelHelpers.interopRequireDefault(_Avatar);

var _Images = require("./images/Images");

var _Images2 = babelHelpers.interopRequireDefault(_Images);

var _WindowDimensions = require("./WindowDimensions");

var _WindowDimensions2 = babelHelpers.interopRequireDefault(_WindowDimensions);

var BaseContainer = function (_Component) {
    babelHelpers.inherits(BaseContainer, _Component);

    function BaseContainer() {
        babelHelpers.classCallCheck(this, BaseContainer);
        return babelHelpers.possibleConstructorReturn(this, (BaseContainer.__proto__ || Object.getPrototypeOf(BaseContainer)).apply(this, arguments));
    }

    babelHelpers.createClass(BaseContainer, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                navigation = _props.navigation,
                scrollable = _props.scrollable;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: _Images2.default.signUp, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                },
                _react2.default.createElement(
                    _nativeBase.Header,
                    { noShadow: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Left,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { onPress: function onPress() {
                                    return navigation.navigate("DrawerOpen");
                                }, transparent: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            _react2.default.createElement(_vectorIcons.EvilIcons, { name: "navicon", size: 32, color: "white", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _nativeBase.Body,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        },
                        typeof title === "string" ? _react2.default.createElement(
                            _nativeBase.Title,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33
                                }
                            },
                            title.toUpperCase()
                        ) : title
                    ),
                    _react2.default.createElement(
                        _nativeBase.Right,
                        { style: { alignItems: "center" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        _react2.default.createElement(_Avatar2.default, { size: 30, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        })
                    )
                ),
                scrollable ? _react2.default.createElement(
                    _reactNative.ScrollView,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.KeyboardAvoidingView,
                        { behavior: "position", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        this.props.children
                    )
                ) : this.props.children,
                _react2.default.createElement(
                    _nativeBase.Footer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.FooterTab,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { onPress: function onPress() {
                                    return navigation.navigate("Calendar");
                                }, transparent: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            },
                            _react2.default.createElement(_nativeBase.Icon, { name: "ios-calendar-outline", style: { fontSize: 32 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { transparent: true, onPress: function onPress() {
                                    return navigation.navigate("Create");
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 54
                                }
                            },
                            _react2.default.createElement(_nativeBase.Icon, { name: "ios-add-circle", style: { fontSize: 64 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { onPress: function onPress() {
                                    return navigation.navigate("Overview");
                                }, transparent: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                }
                            },
                            _react2.default.createElement(_nativeBase.Icon, { name: "ios-stats-outline", style: { fontSize: 32 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 58
                                }
                            })
                        )
                    )
                )
            );
        }
    }]);
    return BaseContainer;
}(_react.Component);

exports.default = BaseContainer;


var style = _reactNative.StyleSheet.create({
    img: babelHelpers.extends({}, _WindowDimensions2.default)
});