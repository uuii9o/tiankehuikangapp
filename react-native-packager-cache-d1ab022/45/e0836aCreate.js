Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/create/Create.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _components = require("../components");

var _Date = require("./Date");

var _Date2 = babelHelpers.interopRequireDefault(_Date);

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Create = function (_Component) {
    babelHelpers.inherits(Create, _Component);

    function Create() {
        babelHelpers.classCallCheck(this, Create);
        return babelHelpers.possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).apply(this, arguments));
    }

    babelHelpers.createClass(Create, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Add New", navigation: this.props.navigation, scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                _react2.default.createElement(_Date2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: _components.Styles.form, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    _react2.default.createElement(_components.Field, { label: "Title", defaultValue: "Weekly Stand Up", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    }),
                    _react2.default.createElement(_components.Field, { label: "Where", defaultValue: "Hangout", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }),
                    _react2.default.createElement(_components.Field, { label: "Notify", defaultValue: "20 minutes before", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }),
                    _react2.default.createElement(
                        _components.Field,
                        { label: "People", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.avatars, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            _react2.default.createElement(_components.Avatar, { id: 2, size: 30, style: style.avatar, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            }),
                            _react2.default.createElement(_components.Avatar, { id: 3, size: 30, style: style.avatar, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(_components.Field, { label: "Repeat", defaultValue: "No", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    })
                )
            );
        }
    }]);
    return Create;
}(_react.Component);

exports.default = Create;


var style = _reactNative.StyleSheet.create({
    avatars: {
        flexDirection: "row"
    },
    avatar: {
        marginRight: _commonColor2.default.contentPadding
    }
});