Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/create/Date.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Date = function (_Component) {
    babelHelpers.inherits(Date, _Component);

    function Date() {
        babelHelpers.classCallCheck(this, Date);
        return babelHelpers.possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));
    }

    babelHelpers.createClass(Date, [{
        key: "render",
        value: function render() {
            var now = (0, _moment2.default)();
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: style.dateContainer, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.date, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: style.dayOfMonth, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            now.format("D")
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: style.dayOfWeek, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17
                                    }
                                },
                                now.format("dddd")
                            ),
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: style.month, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 18
                                    }
                                },
                                now.format("MMMM YYYY").toUpperCase()
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: style.row, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: [style.cell, style.leftCell], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: style.text, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            "2 PM"
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.cell, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: style.text, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            "--"
                        )
                    )
                )
            );
        }
    }]);
    return Date;
}(_react.Component);

exports.default = Date;


var style = _reactNative.StyleSheet.create({
    dateContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor,
        padding: _commonColor2.default.contentPadding * 2
    },
    date: {
        flexDirection: "row",
        alignItems: "center"
    },
    dayOfMonth: {
        fontSize: _commonColor2.default.fontSizeBase * 2 + _commonColor2.default.contentPadding,
        color: "white",
        marginRight: _commonColor2.default.contentPadding
    },
    dayOfWeek: {
        color: "white"
    },
    month: {
        color: _commonColor2.default.listBorderColor
    },
    row: {
        flex: 1,
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor,
        flexDirection: "row"
    },
    cell: {
        flex: .5,
        padding: _commonColor2.default.contentPadding * 2,
        justifyContent: "center",
        alignItems: "center"
    },
    leftCell: {
        borderRightWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    },
    text: {
        color: "white"
    }
});