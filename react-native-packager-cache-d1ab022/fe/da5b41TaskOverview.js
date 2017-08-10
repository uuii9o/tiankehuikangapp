Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/TaskOverview.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _Styles = require("./Styles");

var _Styles2 = babelHelpers.interopRequireDefault(_Styles);

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var TaskOverview = function (_Component) {
    babelHelpers.inherits(TaskOverview, _Component);

    function TaskOverview() {
        babelHelpers.classCallCheck(this, TaskOverview);
        return babelHelpers.possibleConstructorReturn(this, (TaskOverview.__proto__ || Object.getPrototypeOf(TaskOverview)).apply(this, arguments));
    }

    babelHelpers.createClass(TaskOverview, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                completed = _props.completed,
                overdue = _props.overdue;

            return _react2.default.createElement(
                _reactNative.View,
                { style: style.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [style.count, _Styles2.default.center, style.leftCell], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.H1,
                        { style: _reactNative.StyleSheet.flatten(style.heading), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        "" + completed
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _Styles2.default.grayText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        "COMPLETED"
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [style.count, _Styles2.default.center], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.H1,
                        { style: _reactNative.StyleSheet.flatten(style.heading), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        "" + overdue
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _Styles2.default.grayText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        "OVERDUE"
                    )
                )
            );
        }
    }]);
    return TaskOverview;
}(_react.Component);

exports.default = TaskOverview;


var style = _reactNative.StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopWidth: _commonColor2.default.borderWidth,
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    },
    leftCell: {
        borderRightWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    },
    count: {
        flex: .5,
        padding: _commonColor2.default.contentPadding * 2
    },
    heading: {
        color: "white"
    }
});