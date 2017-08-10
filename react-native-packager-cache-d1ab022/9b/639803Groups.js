Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/src/groups/Groups.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _components = require("../components");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Groups = function (_Component) {
    babelHelpers.inherits(Groups, _Component);

    function Groups() {
        babelHelpers.classCallCheck(this, Groups);
        return babelHelpers.possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).apply(this, arguments));
    }

    babelHelpers.createClass(Groups, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _components.BaseContainer,
                { title: "Groups", navigation: this.props.navigation, scrollable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                _react2.default.createElement(Group, { title: "Music", description: "15 ITEMS", picture: _components.Images.music, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }),
                _react2.default.createElement(Group, { title: "Architecture", description: "18 ITEMS", picture: _components.Images.architecture, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }),
                _react2.default.createElement(Group, { title: "Travel", description: "8 ITEMS", picture: _components.Images.travel, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                })
            );
        }
    }]);
    return Groups;
}(_react.Component);

exports.default = Groups;

var Group = function (_Component2) {
    babelHelpers.inherits(Group, _Component2);

    function Group() {
        babelHelpers.classCallCheck(this, Group);
        return babelHelpers.possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
    }

    babelHelpers.createClass(Group, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                picture = _props.picture;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: picture, style: style.img, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    _nativeBase.H1,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    title
                ),
                _react2.default.createElement(
                    _components.Small,
                    { style: style.text, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    description.toUpperCase()
                )
            );
        }
    }]);
    return Group;
}(_react.Component);

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var style = _reactNative.StyleSheet.create({
    img: {
        width: width,
        height: width * 402 / 750,
        resizeMode: "cover",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        borderColor: "white",
        borderWidth: _commonColor2.default.borderWidth,
        padding: _commonColor2.default.contentPadding,
        margin: _commonColor2.default.contentPadding
    }
});