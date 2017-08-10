Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/components/Field.js";

var _lodash = require("lodash");

var _ = babelHelpers.interopRequireWildcard(_lodash);

var _autobindDecorator = require("autobind-decorator");

var _autobindDecorator2 = babelHelpers.interopRequireDefault(_autobindDecorator);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _mobx = require("mobx");

var _native = require("mobx-react/native");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

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

var Field = (0, _native.observer)(_class = (_class2 = function (_Component) {
    babelHelpers.inherits(Field, _Component);

    function Field() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Field);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, "value", _descriptor, _this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Field, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setValue(this.props.defaultValue || "");
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.value = value;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                label = _props.label,
                last = _props.last;
            var value = this.value;

            var keysToFilter = ["right", "defaultValue", "inverse", "label", "last"];
            var props = _.pickBy(this.props, function (value, key) {
                return keysToFilter.indexOf(key) === -1;
            });
            return _react2.default.createElement(
                _reactNative.View,
                { style: [style.row, last ? { borderBottomWidth: 0 } : {}], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                },
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                        onPress: function onPress() {
                            return _this2.refs["comment"] && _this2.refs["comment"].focus();
                        },
                        style: style.labelContainer,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: style.label, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        label.toUpperCase()
                    )
                ),
                _react2.default.Children.count(this.props.children) > 0 ? this.props.children : _react2.default.createElement(_reactNative.TextInput, babelHelpers.extends({
                    ref: "comment",
                    onChangeText: this.setValue }, { value: value }, props, {
                    style: style.input,
                    placeholderTextColor: _commonColor2.default.gray,
                    underlineColorAndroid: "transparent",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }))
            );
        }
    }]);
    return Field;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "value", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "setValue", [_autobindDecorator2.default, _mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, "setValue"), _class2.prototype)), _class2)) || _class;

exports.default = Field;


var style = _reactNative.StyleSheet.create({
    row: {
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor,
        flexDirection: "row",
        alignItems: "center",
        height: 75
    },
    labelContainer: {
        backgroundColor: "transparent"
    },
    label: {
        marginHorizontal: _commonColor2.default.contentPadding * 2,
        color: _commonColor2.default.gray
    },
    input: {
        flex: 1,
        color: "white"
    }
});