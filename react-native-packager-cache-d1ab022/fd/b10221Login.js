Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _desc,
    _value,
    _class,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/login/Login.js";

var _autobindDecorator = require("autobind-decorator");

var _autobindDecorator2 = babelHelpers.interopRequireDefault(_autobindDecorator);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _Mark = require("./Mark");

var _Mark2 = babelHelpers.interopRequireDefault(_Mark);

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

var Login = (_class = function (_React$Component) {
    babelHelpers.inherits(Login, _React$Component);

    function Login(props) {
        babelHelpers.classCallCheck(this, Login);

        var _this = babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = { cell_phone: "", password: "" };
        console.disableYellowBox = true;
        return _this;
    }

    babelHelpers.createClass(Login, [{
        key: "signIn",
        value: function signIn() {
            var _this2 = this;

            fetch("http://10.0.80.67:3000/api/users/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cell_phone: this.state.cell_phone,
                    password: this.state.password
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
        key: "signUp",
        value: function signUp() {
            this.props.navigation.navigate("SignUp");
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: _components.Images.login, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    { contentContainerStyle: style.content, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.KeyboardAvoidingView,
                        { behavior: "position", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.logo, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            _react2.default.createElement(_Mark2.default, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            }),
                            _react2.default.createElement(
                                _nativeBase.H1,
                                { style: _reactNative.StyleSheet.flatten(style.title), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                },
                                "\u60E0\u5EB7\u7CD6\u5FA1"
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: _components.Styles.form, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Item,
                                { underline: true, style: style.textBox, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 80
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "navigate", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 81
                                    }
                                }),
                                _react2.default.createElement(_nativeBase.Input, { placeholder: "\u624B\u673A\u53F7", returnKeyType: "done",
                                    onChangeText: function onChangeText(value) {
                                        return _this3.setState({ cell_phone: value });
                                    },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 82
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                _nativeBase.Item,
                                { underline: true, style: style.textBox, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 86
                                    }
                                },
                                _react2.default.createElement(_nativeBase.Icon, { name: "navigate", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 87
                                    }
                                }),
                                _react2.default.createElement(_nativeBase.Input, { placeholder: "\u5BC6\u7801", returnKeyType: "done",
                                    secureTextEntry: true,
                                    onChangeText: function onChangeText(value) {
                                        return _this3.setState({ password: value });
                                    },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 88
                                    }
                                })
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 94
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { primary: true, block: true, onPress: this.signIn, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 95
                                    }
                                },
                                _react2.default.createElement(
                                    _nativeBase.Text,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 96
                                        }
                                    },
                                    "\u767B\u5F55"
                                )
                            ),
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, block: true, onPress: this.signUp, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 98
                                    }
                                },
                                _react2.default.createElement(
                                    _components.Small,
                                    { style: { color: "white" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 99
                                        }
                                    },
                                    "\u7528\u6237\u6CE8\u518C"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Login;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, "signIn", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "signIn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "signUp", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "signUp"), _class.prototype)), _class);
exports.default = Login;


var style = _reactNative.StyleSheet.create({
    img: babelHelpers.extends({
        resizeMode: "cover"
    }, _components.WindowDimensions),
    content: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logo: {
        margin: _commonColor2.default.contentPadding * 8
    },
    title: {
        marginTop: _commonColor2.default.contentPadding * 2,
        color: "white",
        textAlign: "center"
    },
    blur: {
        backgroundColor: "rgba(255, 255, 255, .2)"
    },
    textBox: {
        marginTop: 10,
        width: 300
    }
});