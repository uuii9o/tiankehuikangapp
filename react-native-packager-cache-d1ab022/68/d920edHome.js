Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/home/Home.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Home = function (_Component) {
    babelHelpers.inherits(Home, _Component);

    function Home() {
        babelHelpers.classCallCheck(this, Home);
        return babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    babelHelpers.createClass(Home, [{
        key: "go",
        value: function go(key) {
            this.props.navigation.navigate(key);
        }
    }, {
        key: "render",
        value: function render() {
            var today = (0, _moment2.default)();
            var date = today.format("MMMM D");
            var dayOfWeek = today.format("dddd").toUpperCase();
            var navigation = this.props.navigation;

            return _react2.default.createElement(
                _components.BaseContainer,
                babelHelpers.extends({ title: dayOfWeek }, { navigation: navigation }, { scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }),
                _react2.default.createElement(
                    _reactNative.View,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.date, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.H3,
                            { style: { textAlign: "center" }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            },
                            date
                        )
                    ),
                    _react2.default.createElement(_components.TaskOverview, { completed: 36, overdue: 4, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    })
                ),
                _react2.default.createElement(_components.Task, {
                    date: "2015-05-08 08:30",
                    title: "New Icons",
                    subtitle: "Mobile App",
                    completed: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }),
                _react2.default.createElement(_components.Task, {
                    date: "2015-05-08 10:00",
                    title: "Coffee Break",
                    completed: false,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }),
                _react2.default.createElement(_components.Task, {
                    date: "2015-05-08 14:00",
                    title: "Design Stand Up",
                    subtitle: "Hangouts",
                    collaborators: [1, 2, 3],
                    completed: false,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                })
            );
        }
    }]);
    return Home;
}(_react.Component);

exports.default = Home;


var style = _reactNative.StyleSheet.create({
    img: babelHelpers.extends({}, _components.WindowDimensions),
    date: {
        padding: _commonColor2.default.contentPadding * 2
    }
});