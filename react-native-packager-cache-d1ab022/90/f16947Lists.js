Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/lists/Lists.js",
    _class,
    _desc,
    _value,
    _class2,
    _descriptor;

var _autobindDecorator = require("autobind-decorator");

var _autobindDecorator2 = babelHelpers.interopRequireDefault(_autobindDecorator);

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _mobx = require("mobx");

var _native = require("mobx-react/native");

var _components = require("../components");

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

var Lists = function (_Component) {
    babelHelpers.inherits(Lists, _Component);

    function Lists() {
        babelHelpers.classCallCheck(this, Lists);
        return babelHelpers.possibleConstructorReturn(this, (Lists.__proto__ || Object.getPrototypeOf(Lists)).apply(this, arguments));
    }

    babelHelpers.createClass(Lists, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Lists", navigation: this.props.navigation, scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                },
                _react2.default.createElement(Item, { title: "Design new icon", done: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }),
                _react2.default.createElement(Item, { title: "Work on UI Kit", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }),
                _react2.default.createElement(Item, { title: "React article: \"Designing for Mobile\"", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }),
                _react2.default.createElement(Item, { title: "Revise wireframes", done: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }),
                _react2.default.createElement(Item, { title: "Catch up with Mary", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                _react2.default.createElement(Item, { title: "Design explorations for new project", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })
            );
        }
    }]);
    return Lists;
}(_react.Component);

exports.default = Lists;

var Item = (0, _native.observer)(_class = (_class2 = function (_Component2) {
    babelHelpers.inherits(Item, _Component2);

    function Item() {
        var _ref;

        var _temp, _this2, _ret;

        babelHelpers.classCallCheck(this, Item);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = babelHelpers.possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this2), _initDefineProp(_this2, "done", _descriptor, _this2), _temp), babelHelpers.possibleConstructorReturn(_this2, _ret);
    }

    babelHelpers.createClass(Item, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var done = this.props.done;

            this.done = !!done;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.done = !this.done;
        }
    }, {
        key: "render",
        value: function render() {
            var title = this.props.title;

            var txtStyle = this.done ? _components.Styles.whiteText : _components.Styles.grayText;
            return _react2.default.createElement(
                _reactNative.View,
                { style: [_components.Styles.listItem, { marginHorizontal: 0 }], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                },
                _react2.default.createElement(
                    _nativeBase.Button,
                    { transparent: true,
                        onPress: this.toggle,
                        style: _reactNative.StyleSheet.flatten([_components.Styles.center, style.button]), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: "md-checkmark", style: _reactNative.StyleSheet.flatten(txtStyle), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [_components.Styles.center, style.title], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: txtStyle, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        title
                    )
                )
            );
        }
    }]);
    return Item;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "done", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "toggle", [_autobindDecorator2.default, _mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, "toggle"), _class2.prototype)), _class2)) || _class;

var style = _reactNative.StyleSheet.create({
    mask: {
        backgroundColor: "rgba(0, 0, 0, .5)"
    },
    button: {
        height: 75, width: 75, borderRadius: 0
    },
    title: {
        paddingLeft: _commonColor2.default.contentPadding
    }
});