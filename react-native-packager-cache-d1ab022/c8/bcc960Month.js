Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/calendar/Month.js";

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _lodash = require("lodash");

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Month = function (_Component) {
    babelHelpers.inherits(Month, _Component);

    function Month() {
        babelHelpers.classCallCheck(this, Month);
        return babelHelpers.possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).apply(this, arguments));
    }

    babelHelpers.createClass(Month, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                month = _props.month,
                date = _props.date,
                onPress = _props.onPress;

            return _react2.default.createElement(
                _reactNative.View,
                { style: style.month, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                },
                _react2.default.createElement(Header, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }),
                _lodash2.default.chunk(calendar[month], 7).map(function (entries, index) {
                    return _react2.default.createElement(Week, babelHelpers.extends({ style: style.border, key: index }, { entries: entries, month: month, date: date, onPress: onPress }, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    }));
                })
            );
        }
    }]);
    return Month;
}(_react.Component);

exports.default = Month;

var Week = function (_Component2) {
    babelHelpers.inherits(Week, _Component2);

    function Week() {
        babelHelpers.classCallCheck(this, Week);
        return babelHelpers.possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).apply(this, arguments));
    }

    babelHelpers.createClass(Week, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                entries = _props2.entries,
                date = _props2.date,
                onPress = _props2.onPress;

            return _react2.default.createElement(
                Row,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                },
                entries.map(function (entry, key) {
                    return _react2.default.createElement(Cell, {
                        key: key,
                        date: { month: entry.month, day: entry.day },
                        active: !entry.outside,
                        selected: entry.day === date.day && entry.month === date.month,
                        onPress: onPress,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    });
                })
            );
        }
    }]);
    return Week;
}(_react.Component);

var Header = function (_Component3) {
    babelHelpers.inherits(Header, _Component3);

    function Header() {
        babelHelpers.classCallCheck(this, Header);
        return babelHelpers.possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    babelHelpers.createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                Row,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                },
                ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(function (day, key) {
                    return _react2.default.createElement(
                        _reactNative.View,
                        { key: key, style: [_components.Styles.flexGrow, _components.Styles.center], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: style.inactiveText, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 79
                                }
                            },
                            day
                        )
                    );
                })
            );
        }
    }]);
    return Header;
}(_react.Component);

var Row = function (_Component4) {
    babelHelpers.inherits(Row, _Component4);

    function Row() {
        babelHelpers.classCallCheck(this, Row);
        return babelHelpers.possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    babelHelpers.createClass(Row, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: [{ flexDirection: "row" }, this.props.style], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                },
                this.props.children
            );
        }
    }]);
    return Row;
}(_react.Component);

var Cell = function (_Component5) {
    babelHelpers.inherits(Cell, _Component5);

    function Cell() {
        babelHelpers.classCallCheck(this, Cell);
        return babelHelpers.possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
    }

    babelHelpers.createClass(Cell, [{
        key: "render",
        value: function render() {
            var _props3 = this.props,
                date = _props3.date,
                active = _props3.active,
                selected = _props3.selected,
                onPress = _props3.onPress;

            var cellStyle = [_components.Styles.flexGrow, _components.Styles.center, {
                borderColor: selected ? "white" : "transparent",
                borderRadius: 0,
                borderWidth: _commonColor2.default.borderWidth
            }];
            return _react2.default.createElement(
                _nativeBase.Button,
                {
                    style: _reactNative.StyleSheet.flatten(cellStyle),
                    onPress: function (_onPress) {
                        function onPress() {
                            return _onPress.apply(this, arguments);
                        }

                        onPress.toString = function () {
                            return _onPress.toString();
                        };

                        return onPress;
                    }(function () {
                        return onPress ? onPress(date) : undefined;
                    }),
                    transparent: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: active ? style.activeText : style.inactiveText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120
                        }
                    },
                    "" + date.day
                )
            );
        }
    }]);
    return Cell;
}(_react.Component);

var style = _reactNative.StyleSheet.create({
    month: {
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    },
    activeText: {
        color: "white"
    },
    inactiveText: {
        color: _commonColor2.default.listBorderColor
    },
    bordered: {
        borderTopWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    },
    border: {
        borderTopWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor
    }
});

var calendar = [[], [], [], [], [], [], [], [], [], [], [], []];
var addCalendarEntry = function addCalendarEntry(month, outside, date) {
    calendar[month].push({
        outside: outside,
        day: date.date(),
        month: date.month()
    });
};

calendar.forEach(function (entries, month) {
    var firstOf = function firstOf() {
        return (0, _moment2.default)({ year: 2017, month: month });
    };
    var daysInMonth = firstOf().daysInMonth();
    var dayOnFirst = firstOf().isoWeekday();
    var dayOnLast = firstOf().date(daysInMonth).isoWeekday();

    for (var i = 1; i < dayOnFirst; i++) {
        var _date = firstOf().date(i - dayOnFirst + 1);
        addCalendarEntry(month, true, _date);
    }

    for (var _i = 1; _i <= daysInMonth; _i++) {
        var _date2 = firstOf().date(_i);
        addCalendarEntry(month, false, _date2);
    }

    for (var _i2 = 1; _i2 <= 7 - dayOnLast; _i2++) {
        var _date3 = firstOf().date(daysInMonth + _i2);
        addCalendarEntry(month, true, _date3);
    }
});