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

    function Login() {
        babelHelpers.classCallCheck(this, Login);
        return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    babelHelpers.createClass(Login, [{
        key: "signIn",
        value: function signIn() {
            _components.NavigationHelpers.reset(this.props.navigation, "Walkthrough");
            fetch("http://10.0.80.102:3000/test", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    member_first_name: ""
                })
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
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
            return _react2.default.createElement(
                _reactNative.Image,
                { source: _components.Images.login, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                },
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    { contentContainerStyle: style.content, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.KeyboardAvoidingView,
                        { behavior: "position", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.logo, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            },
                            _react2.default.createElement(_Mark2.default, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 53
                                }
                            }),
                            _react2.default.createElement(
                                _nativeBase.H1,
                                { style: _reactNative.StyleSheet.flatten(style.title), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 54
                                    }
                                },
                                "\u60E0\u5EB7\u7CD6\u5FA1"
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: _components.Styles.form, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 56
                                }
                            },
                            _react2.default.createElement(_components.Field, { label: "\u624B\u673A\u53F7",
                                autoCapitalize: "none",
                                returnKeyType: "next",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                }
                            }),
                            _react2.default.createElement(_components.Field, { label: "\u5BC6\u7801",
                                secureTextEntry: true,
                                autoCapitalize: "none",
                                returnKeyType: "go",
                                onSubmitEditing: this.signIn,
                                last: true,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 69
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { primary: true, block: true, onPress: this.signIn, __source: {
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
                                    "\u767B\u5F55"
                                )
                            ),
                            _react2.default.createElement(
                                _nativeBase.Button,
                                { transparent: true, block: true, onPress: this.signUp, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73
                                    }
                                },
                                _react2.default.createElement(
                                    _components.Small,
                                    { style: { color: "white" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 74
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
    }
});