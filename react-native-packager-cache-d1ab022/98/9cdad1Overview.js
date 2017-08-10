Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/overview/Overview.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var DAY = 1;
var WEEK = 2;
var MONTH = 3;

var Overview = function (_Component) {
    babelHelpers.inherits(Overview, _Component);

    function Overview() {
        babelHelpers.classCallCheck(this, Overview);
        return babelHelpers.possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
    }

    babelHelpers.createClass(Overview, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Overview", navigation: this.props.navigation, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                _react2.default.createElement(
                    _nativeBase.Tabs,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Tab,
                        { heading: _react2.default.createElement(
                                _nativeBase.TabHeading,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 19
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.Text,
                                    { style: style.tabHeading, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 19
                                        }
                                    },
                                    "DAY"
                                )
                            ), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        _react2.default.createElement(OverviewTab, { period: DAY, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _nativeBase.Tab,
                        { heading: _react2.default.createElement(
                                _nativeBase.TabHeading,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 22
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.Text,
                                    { style: style.tabHeading, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 22
                                        }
                                    },
                                    "WEEK"
                                )
                            ), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        _react2.default.createElement(OverviewTab, { period: WEEK, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _nativeBase.Tab,
                        { heading: _react2.default.createElement(
                                _nativeBase.TabHeading,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.Text,
                                    { style: style.tabHeading, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 25
                                        }
                                    },
                                    "MONTH"
                                )
                            ), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        _react2.default.createElement(OverviewTab, { period: MONTH, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        })
                    )
                )
            );
        }
    }]);
    return Overview;
}(_react.Component);

exports.default = Overview;

var OverviewTab = function (_Component2) {
    babelHelpers.inherits(OverviewTab, _Component2);

    function OverviewTab() {
        babelHelpers.classCallCheck(this, OverviewTab);
        return babelHelpers.possibleConstructorReturn(this, (OverviewTab.__proto__ || Object.getPrototypeOf(OverviewTab)).apply(this, arguments));
    }

    babelHelpers.createClass(OverviewTab, [{
        key: "render",
        value: function render() {
            var period = this.props.period;

            var label = void 0;
            if (period === 1) {
                label = (0, _moment2.default)().format("dddd");
            } else if (period === 2) {
                label = "Week " + (0, _moment2.default)().format("W");
            } else {
                label = (0, _moment2.default)().format("MMMM");
            }
            return _react2.default.createElement(
                _nativeBase.Container,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [style.tab, _components.Styles.center], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.H1,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        },
                        label
                    )
                ),
                _react2.default.createElement(_components.TaskOverview, { completed: 64, overdue: 5, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }),
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    _react2.default.createElement(_components.Task, { date: "2015-05-08 09:30", title: "New Icons", subtitle: "Mobile App", completed: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    }),
                    _react2.default.createElement(_components.Task, {
                        date: "2015-05-08 11:00",
                        title: "Design Stand Up",
                        subtitle: "Hangouts",
                        collaborators: [1, 2, 3],
                        completed: false,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    }),
                    _react2.default.createElement(_components.Task, { date: "2015-05-08 14:00", title: "New Icons", subtitle: "Home App", completed: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    }),
                    _react2.default.createElement(_components.Task, { date: "2015-05-08 16:00", title: "Revise Wireframes", subtitle: "Company Website", completed: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    })
                )
            );
        }
    }]);
    return OverviewTab;
}(_react.Component);

var style = _reactNative.StyleSheet.create({
    tabHeading: {
        color: "white"
    },
    tab: {
        padding: _commonColor2.default.contentPadding * 4
    }
});