Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _desc,
    _value,
    _class,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/drawer/Drawer.js";

var _autobindDecorator = require("autobind-decorator");

var _autobindDecorator2 = babelHelpers.interopRequireDefault(_autobindDecorator);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

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

var Drawer = (_class = function (_Component) {
    babelHelpers.inherits(Drawer, _Component);

    function Drawer() {
        babelHelpers.classCallCheck(this, Drawer);
        return babelHelpers.possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    babelHelpers.createClass(Drawer, [{
        key: "go",
        value: function go(key) {
            this.props.navigation.navigate(key);
        }
    }, {
        key: "login",
        value: function login() {
            _components.NavigationHelpers.reset(this.props.navigation, "Login");
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var navigation = this.props.navigation;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: _components.Images.signUp, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                _react2.default.createElement(
                    _nativeBase.Container,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Header,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Left,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, onPress: function onPress() {
                                        return _this2.go("DrawerClose");
                                    }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 29
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "ios-close-outline", style: _reactNative.StyleSheet.flatten(style.closeIcon), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 30
                                    }
                                })
                            )
                        ),
                        _react2.default.createElement(
                            _nativeBase.Body,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Title,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 34
                                    }
                                },
                                "NAVIGATE"
                            )
                        ),
                        _react2.default.createElement(_nativeBase.Right, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.itemContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.row, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "\u4E3B\u9875", icon: "ios-home-outline", left: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            })),
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "\u65E5\u5386", icon: "ios-calendar-outline", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                }
                            }))
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.row, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                }
                            },
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "Groups", icon: "ios-apps-outline", left: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            })),
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "Overview", icon: "ios-analytics-outline", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                }
                            }))
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.row, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            },
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "Lists", icon: "ios-list-outline", left: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                }
                            })),
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "\u4E2A\u4EBA\u4E3B\u9875", icon: "ios-contact-outline", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            }))
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.row, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            },
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "\u65F6\u95F4\u7EBF", icon: "ios-time-outline", left: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            })),
                            _react2.default.createElement(DrawerItem, babelHelpers.extends({ navigation: navigation }, { name: "\u8BBE\u7F6E", icon: "ios-options-outline", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 53
                                }
                            }))
                        )
                    ),
                    _react2.default.createElement(
                        _nativeBase.Button,
                        { transparent: true, block: true, onPress: this.login, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Text,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                }
                            },
                            "\u767B\u51FA"
                        )
                    )
                )
            );
        }
    }]);
    return Drawer;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, "login", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "login"), _class.prototype)), _class);
exports.default = Drawer;

var DrawerItem = function (_Component2) {
    babelHelpers.inherits(DrawerItem, _Component2);

    function DrawerItem() {
        babelHelpers.classCallCheck(this, DrawerItem);
        return babelHelpers.possibleConstructorReturn(this, (DrawerItem.__proto__ || Object.getPrototypeOf(DrawerItem)).apply(this, arguments));
    }

    babelHelpers.createClass(DrawerItem, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                navigation = _props.navigation,
                icon = _props.icon,
                left = _props.left;

            var navState = this.props.navigation.state;
            var active = navState.routes[navState.index].key === name;
            var props = {
                onPress: function onPress() {
                    return navigation.navigate(name);
                },
                style: [style.item, left ? { borderRightWidth: _commonColor2.default.borderWidth } : undefined]
            };
            return _react2.default.createElement(
                _reactNative.TouchableHighlight,
                babelHelpers.extends({}, props, { activeOpacity: .5, underlayColor: "rgba(255, 255, 255, .2)", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [_components.Styles.center, _components.Styles.flexGrow], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: icon, style: { color: _commonColor2.default.listBorderColor }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    }),
                    _react2.default.createElement(
                        _nativeBase.Text,
                        { style: { marginTop: _commonColor2.default.contentPadding }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        },
                        name
                    ),
                    active && _react2.default.createElement(_reactNative.View, { style: style.dot, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        }
                    })
                )
            );
        }
    }]);
    return DrawerItem;
}(_react.Component);

var style = _reactNative.StyleSheet.create({
    img: babelHelpers.extends({
        resizeMode: "cover"
    }, _components.WindowDimensions),
    mask: {
        color: _commonColor2.default.listBorderColor
    },
    closeIcon: {
        fontSize: 50,
        color: _commonColor2.default.listBorderColor
    },
    itemContainer: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: "row",
        borderColor: _commonColor2.default.listBorderColor,
        borderBottomWidth: _commonColor2.default.borderWidth
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        borderColor: _commonColor2.default.listBorderColor
    },
    dot: {
        backgroundColor: "white",
        height: 10,
        width: 10,
        borderRadius: 5,
        position: "absolute",
        right: _commonColor2.default.contentPadding,
        top: _commonColor2.default.contentPadding,
        alignSelf: "flex-end"
    }
});