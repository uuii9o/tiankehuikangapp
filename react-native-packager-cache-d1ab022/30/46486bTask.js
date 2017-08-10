Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/Task.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Task = (_temp = _class = function (_Component) {
    babelHelpers.inherits(Task, _Component);

    function Task() {
        babelHelpers.classCallCheck(this, Task);
        return babelHelpers.possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
    }

    babelHelpers.createClass(Task, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                subtitle = _props.subtitle,
                collaborators = _props.collaborators,
                timeline = _props.timeline;

            var date = (0, _moment2.default)(this.props.date);
            var height = collaborators.length > 1 ? 150 : 100;
            return _react2.default.createElement(
                _reactNative.View,
                { style: [_components.Styles.listItem, { height: height }, timeline ? style.noBorder : {}], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [style.title, timeline ? style.timelineLeft : {}], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.H3,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        },
                        title
                    ),
                    subtitle && _react2.default.createElement(
                        _reactNative.Text,
                        { style: _components.Styles.grayText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        subtitle
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.row, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        },
                        collaborators.map(function (id, key) {
                            return _react2.default.createElement(_components.Avatar, babelHelpers.extends({ id: id, key: key }, { style: style.avatar, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37
                                }
                            }));
                        })
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [style.time, timeline ? style.timelineRight : {}], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: style.titleText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            }
                        },
                        date.format("HH")
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: _components.Styles.whiteText, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            "\xa0" + date.format("mm")
                        ),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: _components.Styles.grayText, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                }
                            },
                            "\xa0" + date.format("A")
                        )
                    )
                )
            );
        }
    }]);
    return Task;
}(_react.Component), _class.defaultProps = {
    collaborators: []
}, _temp);
exports.default = Task;


var style = _reactNative.StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    doublePadding: {
        padding: _commonColor2.default.contentPadding * 2
    },
    avatar: {
        marginTop: _commonColor2.default.contentPadding,
        marginRight: _commonColor2.default.contentPadding
    },
    verticalLine: {
        borderLeftWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor,
        position: "absolute"
    },
    time: {
        alignItems: "center",
        flexDirection: "row",
        padding: _commonColor2.default.contentPadding
    },
    title: {
        justifyContent: "center",
        flex: 1,
        padding: _commonColor2.default.contentPadding
    },
    titleText: {
        fontSize: _commonColor2.default.fontSizeBase * 2 + _commonColor2.default.contentPadding,
        color: "white"
    },
    noBorder: {
        borderBottomWidth: 0
    },
    timelineLeft: {
        flex: .5,
        borderRightWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    },
    timelineRight: {
        flex: .5,
        justifyContent: "flex-end"
    }
});