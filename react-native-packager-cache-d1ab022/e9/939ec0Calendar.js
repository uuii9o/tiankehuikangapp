Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _descriptor2,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/calendar/Calendar.js";

var _autobindDecorator = require("autobind-decorator");

var _autobindDecorator2 = babelHelpers.interopRequireDefault(_autobindDecorator);

var _moment = require("moment");

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _mobx = require("mobx");

var _native = require("mobx-react/native");

var _Month = require("./Month");

var _Month2 = babelHelpers.interopRequireDefault(_Month);

var _components = require("../components");

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

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

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var now = (0, _moment2.default)();

var Calendar = (0, _native.observer)(_class = (_class2 = function (_Component) {
    babelHelpers.inherits(Calendar, _Component);

    function Calendar() {
        babelHelpers.classCallCheck(this, Calendar);

        var _this = babelHelpers.possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this));

        _initDefineProp(_this, "selectedMonth", _descriptor, _this);

        _initDefineProp(_this, "selectedDate", _descriptor2, _this);

        var month = now.month();
        var day = now.date();
        _this.selectedMonth = month;
        _this.selectedDate = { month: month, day: day };
        return _this;
    }

    babelHelpers.createClass(Calendar, [{
        key: "onChangeMonth",
        value: function onChangeMonth(month) {
            this.selectedMonth = month;
        }
    }, {
        key: "onChangeDate",
        value: function onChangeDate(date) {
            this.selectedDate = date;
        }
    }, {
        key: "render",
        value: function render() {
            var navigation = this.props.navigation;

            var title = _react2.default.createElement(
                _nativeBase.Picker,
                {
                    style: { width: 150 },
                    selectedValue: this.selectedMonth,
                    onValueChange: this.onChangeMonth,
                    iosHeader: "Select Month",
                    iosIcon: _react2.default.createElement(_nativeBase.Icon, { name: "ios-arrow-down-outline", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    }),
                    itemTextStyle: { color: "black" },
                    itemStyle: { borderColor: "black" },
                    textStyle: { color: "white" },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (val) {
                    return _react2.default.createElement(_nativeBase.Picker.Item, { key: val, value: val, label: (0, _moment2.default)().month(val).format("MMMM"), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    });
                })
            );
            return _react2.default.createElement(
                _components.BaseContainer,
                babelHelpers.extends({ navigation: navigation, title: title }, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }),
                _react2.default.createElement(_Month2.default, { month: this.selectedMonth, date: this.selectedDate, onPress: this.onChangeDate, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }),
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    _react2.default.createElement(_components.Task, {
                        date: "2015-05-08 08:30",
                        title: "New Icons",
                        subtitle: "Mobile App",
                        completed: true,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    }),
                    _react2.default.createElement(_components.Task, {
                        date: "2015-05-08 10:00",
                        title: "Coffee Break",
                        completed: false,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
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
                            lineNumber: 71
                        }
                    })
                )
            );
        }
    }]);
    return Calendar;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectedMonth", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedDate", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "onChangeMonth", [_autobindDecorator2.default, _mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, "onChangeMonth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onChangeDate", [_autobindDecorator2.default, _mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, "onChangeDate"), _class2.prototype)), _class2)) || _class;

exports.default = Calendar;