Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/SingleChoice.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _mobx = require("mobx");

var _native = require("mobx-react/native");

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _Styles = require("./Styles");

var _Styles2 = babelHelpers.interopRequireDefault(_Styles);

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

var SingleChoice = (0, _native.observer)(_class = (_class2 = function (_Component) {
    babelHelpers.inherits(SingleChoice, _Component);

    function SingleChoice() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, SingleChoice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = SingleChoice.__proto__ || Object.getPrototypeOf(SingleChoice)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, "index", _descriptor, _this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(SingleChoice, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var labels = this.props.labels;

            return _react2.default.createElement(
                _reactNative.View,
                { style: _Styles2.default.row, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                labels.map(function (label, index) {
                    return _react2.default.createElement(CheckBox, {
                        key: index,
                        label: label,
                        checked: index === _this2.index,
                        onPress: function onPress() {
                            return (0, _mobx.runInAction)(function () {
                                return _this2.index = index;
                            });
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    });
                })
            );
        }
    }]);
    return SingleChoice;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "index", [_mobx.observable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class;

exports.default = SingleChoice;

var CheckBox = function (_Component2) {
    babelHelpers.inherits(CheckBox, _Component2);

    function CheckBox() {
        babelHelpers.classCallCheck(this, CheckBox);
        return babelHelpers.possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
    }

    babelHelpers.createClass(CheckBox, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                label = _props.label,
                checked = _props.checked,
                onPress = _props.onPress;

            return _react2.default.createElement(
                _nativeBase.Button,
                babelHelpers.extends({ onPress: onPress }, { disabled: checked, transparent: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }),
                _react2.default.createElement(_nativeBase.CheckBox, babelHelpers.extends({ checked: checked, onPress: onPress }, { style: { margin: 15 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                })),
                _react2.default.createElement(
                    _nativeBase.Text,
                    { style: { color: checked ? "white" : "rgba(255, 255, 255, .5)" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    label
                )
            );
        }
    }]);
    return CheckBox;
}(_react.Component);