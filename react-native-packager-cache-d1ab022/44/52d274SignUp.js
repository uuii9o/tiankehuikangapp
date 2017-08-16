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

    function SignUp(props) {
        babelHelpers.classCallCheck(this, SignUp);

        var _this = babelHelpers.possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

        _this.state = {
            cell_phone: "", password: "", password_confirm: "", email: "", first_name: "",
            last_name: "", dob: "", gender: ""
        };
        console.disableYellowBox = true;
        return _this;
    }

    babelHelpers.createClass(SignUp, [{
        key: "back",
        value: function back() {
            this.props.navigation.goBack();
        }
    }, {
        key: "signIn",
        value: function signIn() {
            var _this2 = this;

            if (this.state.password != this.state.password_confirm) {
                alert("The password not match. Please reenter password.");
                return;
            }
            _components.NavigationHelpers.reset(this.props.navigation, "Walkthrough");
            fetch("http://10.0.80.67:3000/api/users/sign_up", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        cell_phone: this.state.cell_phone,
                        password: this.state.password,
                        email: this.state.email
                    },
                    patient: {
                        fname: this.state.first_name,
                        lname: this.state.last_name,
                        dob: this.state.dob,
                        gender: this.state.gender
                    }
                })
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                if (parseInt(json.status) == 2000) {
                    _components.NavigationHelpers.reset(_this2.props.navigation, "Walkthrough");
                } else {
                    alert("手机号或密码错误.");
                }
                return json;
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: _components.Images.signUp, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                },
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    { style: _components.Styles.flexGrow, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.KeyboardAvoidingView,
                        { behavior: "position", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Header,
                            { noShadow: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 77
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Left,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 78
                                    }
                                },
                                _react2.default.createElement(
                                    _nativeBase.Button,
                                    { onPress: this.back, transparent: true, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 79
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Icon, { name: "close", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 80
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _nativeBase.Body,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 83
                                    }
                                },
                                _react2.default.createElement(
                                    _nativeBase.Title,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 84
                                        }
                                    },
                                    "\u75C5\u4EBA\u6CE8\u518C"
                                )
                            ),
                            _react2.default.createElement(_nativeBase.Right, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 86
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.row, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 88
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, block: true, style: _reactNative.StyleSheet.flatten(style.btn), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 89
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "logo-twitter", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 90
                                    }
                                }),
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    { style: { textAlign: "center" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 91
                                        }
                                    },
                                    "\u5FAE\u65B0\u767B\u5F55"
                                )
                            ),
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, block: true, style: _reactNative.StyleSheet.flatten([style.btn, style.facebook]), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 94
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "logo-facebook", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 95
                                    }
                                }),
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    { style: { textAlign: "center" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 97
                                        }
                                    },
                                    "\u5FAE\u535A\u767B\u5F55"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _nativeBase.Button,
                            { transparent: true, block: true, style: _reactNative.StyleSheet.flatten([style.btn, style.email]), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 100
                                }
                            },
                            _react2.default.createElement(_nativeBase.Icon, { name: "ios-mail-outline", style: { color: "white", marginRight: 5 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 101
                                }
                            }),
                            _react2.default.createElement(
                                _nativeBase.Text,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 102
                                    }
                                },
                                "\u624B\u673A\u767B\u5F55"
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: _components.Styles.form, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 104
                                }
                            },
                            _react2.default.createElement(_components.Field, { label: "\u90AE\u7BB1(\u53EF\u9009)", onChangeText: function onChangeText(value) {
                                    return _this3.setState({ email: value });
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 105
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "\u5BC6\u7801", onChangeText: function onChangeText(value) {
                                    return _this3.setState({ password: value });
                                }, isPasswordField: "true", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 106
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "\u786E\u8BA4\u5BC6\u7801", onChangeText: function onChangeText(value) {
                                    return _this3.setState({ password_confirm: value });
                                }, isPasswordField: "true", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 107
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "\u59D3", onChangeText: function onChangeText(value) {
                                    return _this3.setState({ first_name: value });
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 108
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "\u540D", onChangeText: function onChangeText(value) {
                                    return _this3.setState({ last_name: value });
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 109
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "\u624B\u673A(\u5FC5\u586B)", onChangeText: function onChangeText(value) {
                                    return _this3.setState({ cell_phone: value });
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 110
                                }
                            }),
                            _react2.default.createElement(
                                _components.Field,
                                { label: "Gender", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 111
                                    }
                                },
                                _react2.default.createElement(_components.SingleChoice, { labels: ["Male", "Female"], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 112
                                    }
                                })
                            ),
                            _react2.default.createElement(_components.Field, { label: "\u751F\u65E5", last: true, onChangeText: function onChangeText(value) {
                                    return _this3.setState({ dob: value });
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 114
                                }
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.Button,
                    { primary: true, block: true, onPress: this.signIn, style: { height: _commonColor2.default.footerHeight }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 119
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