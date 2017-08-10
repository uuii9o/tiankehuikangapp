Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/timeline/Timeline.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Timeline = function (_Component) {
    babelHelpers.inherits(Timeline, _Component);

    function Timeline() {
        babelHelpers.classCallCheck(this, Timeline);
        return babelHelpers.possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    babelHelpers.createClass(Timeline, [{
        key: "render",
        value: function render() {
            var today = (0, _moment2.default)();
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Timeline", navigation: this.props.navigation, scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [_components.Styles.center, style.heading], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.H1,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        today.format("MMMM")
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: _components.Styles.row, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        _react2.default.createElement(_nativeBase.Icon, { name: "ios-time-outline", style: { marginRight: _commonColor2.default.contentPadding }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        }),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 19
                                }
                            },
                            today.format("dddd, MMMM D")
                        )
                    )
                ),
                _react2.default.createElement(_components.Task, { date: "2015-05-08 09:30", title: "New Icons", subtitle: "Mobile App", completed: true, timeline: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }),
                _react2.default.createElement(_components.Task, {
                    date: "2015-05-08 11:00",
                    title: "Design Stand Up",
                    subtitle: "Hangouts",
                    collaborators: [1, 2, 3],
                    timeline: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }),
                _react2.default.createElement(_components.Task, { date: "2015-05-08 14:00", title: "New Icons", subtitle: "Home App", completed: true, timeline: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }),
                _react2.default.createElement(_components.Task, { date: "2015-05-08 16:00", title: "Revise Wireframes", subtitle: "Company Website", completed: true, timeline: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                })
            );
        }
    }]);
    return Timeline;
}(_react.Component);

exports.default = Timeline;


var style = _reactNative.StyleSheet.create({
    heading: {
        marginTop: _commonColor2.default.contentPadding * 2
    }
});