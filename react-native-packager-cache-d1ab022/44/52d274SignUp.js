Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _desc,
    _value,
    _class,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/sign-up/SignUp.js";

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

var SignUp = (_class = function (_Component) {
    babelHelpers.inherits(SignUp, _Component);

    function SignUp() {
        babelHelpers.classCallCheck(this, SignUp);
        return babelHelpers.possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
    }

    babelHelpers.createClass(SignUp, [{
        key: "back",
        value: function back() {
            this.props.navigation.goBack();
        }
    }, {
        key: "signIn",
        value: function signIn() {
            _components.NavigationHelpers.reset(this.props.navigation, "Walkthrough");
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactNative.Image,
                { source: _components.Images.signUp, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    { style: _components.Styles.flexGrow, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.KeyboardAvoidingView,
                        { behavior: "position", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Header,
                            { noShadow: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Left,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 33
                                    }
                                },
                                _react2.default.createElement(
                                    _nativeBase.Button,
                                    { onPress: this.back, transparent: true, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 34
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Icon, { name: "close", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _nativeBase.Body,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 38
                                    }
                                },
                                _react2.default.createElement(
                                    _nativeBase.Title,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 39
                                        }
                                    },
                                    "Sign Up"
                                )
                            ),
                            _react2.default.createElement(_nativeBase.Right, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.row, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, block: true, style: _reactNative.StyleSheet.flatten(style.btn), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "logo-twitter", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 45
                                    }
                                }),
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    { style: { textAlign: "center" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 46
                                        }
                                    },
                                    "Connect with"
                                ),
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    { style: { textAlign: "center" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 47
                                        }
                                    },
                                    "Twitter"
                                )
                            ),
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, block: true, style: _reactNative.StyleSheet.flatten([style.btn, style.facebook]), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "logo-facebook", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50
                                    }
                                }),
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    { style: { textAlign: "center" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 51
                                        }
                                    },
                                    "Connect with"
                                ),
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    { style: { textAlign: "center" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 52
                                        }
                                    },
                                    "Facebook"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { transparent: true, block: true, style: _reactNative.StyleSheet.flatten([style.btn, style.email]), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            },
                            _react2.default.createElement(_nativeBase.Icon, { name: "ios-mail-outline", style: { color: "white", marginRight: 5 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 56
                                }
                            }),
                            _react2.default.createElement(
                                _nativeBase.Text,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 57
                                    }
                                },
                                "or use your email address"
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: _components.Styles.form, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 59
                                }
                            },
                            _react2.default.createElement(_components.Field, { label: "Name", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "Username", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "Password", secureTextEntry: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            }),
                            _react2.default.createElement(
                                _components.Field,
                                { label: "Gender", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 63
                                    }
                                },
                                _react2.default.createElement(_components.SingleChoice, { labels: ["Male", "Female"], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                })
                            ),
                            _react2.default.createElement(_components.Field, { label: "Birthday", last: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                }
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.Button,
                    { primary: true, block: true, onPress: this.signIn, style: { height: _commonColor2.default.footerHeight }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        "CONTINUE"
                    )
                )
            );
        }
    }]);
    return SignUp;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, "back", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "back"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "signIn", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "signIn"), _class.prototype)), _class);
exports.default = SignUp;


var style = _reactNative.StyleSheet.create({
    img: babelHelpers.extends({}, _components.WindowDimensions),
    row: {
        flexDirection: "row"
    },
    btn: {
        flex: 1,
        margin: 0,
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        height: 125,
        flexDirection: "column"
    },
    facebook: {
        borderLeftWidth: _commonColor2.default.borderWidth,
        borderColor: "white"
    },
    email: {
        borderTopWidth: _commonColor2.default.borderWidth,
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: "white",
        flexDirection: "row",
        height: 87
    }
});