Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _desc,
    _value,
    _class,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/walkthrough/Walkthrough.js";

var _autobindDecorator = require("autobind-decorator");

var _autobindDecorator2 = babelHelpers.interopRequireDefault(_autobindDecorator);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _reactNativeSwiper = require("react-native-swiper");

var _reactNativeSwiper2 = babelHelpers.interopRequireDefault(_reactNativeSwiper);

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Walkthrough = (_class = function (_Component) {
    babelHelpers.inherits(Walkthrough, _Component);

    function Walkthrough() {
        babelHelpers.classCallCheck(this, Walkthrough);
        return babelHelpers.possibleConstructorReturn(this, (Walkthrough.__proto__ || Object.getPrototypeOf(Walkthrough)).apply(this, arguments));
    }

    babelHelpers.createClass(Walkthrough, [{
        key: "home",
        value: function home() {
            _components.NavigationHelpers.reset(this.props.navigation, "Main");
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: _components.Images.walkthrough, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                },
                _react2.default.createElement(
                    _reactNativeSwiper2.default,
                    {
                        ref: function ref(swiper) {
                            return _this2.swiper = swiper;
                        },
                        height: swiperHeight,
                        dot: _react2.default.createElement(_nativeBase.Icon, { name: "ios-radio-button-off-outline", style: { fontSize: 12, margin: 4 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        }),
                        activeDot: _react2.default.createElement(_nativeBase.Icon, { name: "ios-radio-button-on", style: { fontSize: 12, margin: 4 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            }
                        }),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: [_components.Styles.center, _components.Styles.flexGrow], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        _react2.default.createElement(Phone, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                }
                            },
                            "Share with coworkers, friends, and family"
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: [_components.Styles.center, _components.Styles.flexGrow], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(Phone, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            }
                        }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            "Manage your tasks efficiently and quickly"
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: [_components.Styles.center, _components.Styles.flexGrow], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            }
                        },
                        _react2.default.createElement(Phone, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            "Group by topics that matter to you"
                        )
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.Footer,
                    { style: { borderTopWidth: _commonColor2.default.borderWidth }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.FooterTab,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 48
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { onPress: this.home, transparent: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Text,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50
                                    }
                                },
                                "SKIP"
                            )
                        ),
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { transparent: true, onPress: function onPress() {
                                    return _this2.swiper.scrollBy(1);
                                }, style: _reactNative.StyleSheet.flatten(style.next), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Text,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    }
                                },
                                "NEXT"
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Walkthrough;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, "home", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "home"), _class.prototype)), _class);
exports.default = Walkthrough;

var Phone = function (_Component2) {
    babelHelpers.inherits(Phone, _Component2);

    function Phone() {
        babelHelpers.classCallCheck(this, Phone);
        return babelHelpers.possibleConstructorReturn(this, (Phone.__proto__ || Object.getPrototypeOf(Phone)).apply(this, arguments));
    }

    babelHelpers.createClass(Phone, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: style.phone, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: style.phoneContainer, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: "ios-checkmark-circle-outline", style: { fontSize: 45 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: style.phoneFooter, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: "ios-radio-button-off", style: { fontSize: 15 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    })
                )
            );
        }
    }]);
    return Phone;
}(_react.Component);

var height = _components.WindowDimensions.height;

var borderWidth = _commonColor2.default.borderWidth * 2;
var swiperHeight = height - _commonColor2.default.footerHeight;
var style = _reactNative.StyleSheet.create({
    img: babelHelpers.extends({}, _components.WindowDimensions),
    next: {
        borderRadius: 0,
        borderLeftWidth: _commonColor2.default.borderWidth,
        borderColor: "white"
    },
    phone: {
        borderColor: "white",
        borderWidth: borderWidth,
        borderRadius: 4,
        height: 175,
        width: 100,
        marginBottom: _commonColor2.default.contentPadding
    },
    phoneContainer: {
        flex: .8,
        justifyContent: "center",
        alignItems: "center"
    },
    phoneFooter: {
        flex: .2,
        borderColor: "white",
        borderTopWidth: borderWidth,
        justifyContent: "center",
        alignItems: "center"
    }
});