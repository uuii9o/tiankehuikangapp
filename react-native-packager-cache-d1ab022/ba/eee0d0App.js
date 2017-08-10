Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppNavigator = exports.default = undefined;
var _jsxFileName = "/Users/yusong1/Desktop/tiankehuikangapp/App.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _nativeBase = require("native-base");

var _reactNavigation = require("react-navigation");

var _expo = require("expo");

var _mobx = require("mobx");

var _components = require("./src/components");

var _login = require("./src/login");

var _signUp = require("./src/sign-up");

var _walkthrough = require("./src/walkthrough");

var _drawer = require("./src/drawer");

var _home = require("./src/home");

var _calendar = require("./src/calendar");

var _overview = require("./src/overview");

var _groups = require("./src/groups");

var _lists = require("./src/lists");

var _profile = require("./src/profile");

var _timeline = require("./src/timeline");

var _settings = require("./src/settings");

var _create = require("./src/create");

var _components2 = require("./native-base-theme/components");

var _components3 = babelHelpers.interopRequireDefault(_components2);

var _commonColor = require("./native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var App = function (_Component) {
    babelHelpers.inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            ready: false
        }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(App, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            var promises = [];
            promises.push(_expo.Font.loadAsync({
                "Avenir-Book": require("./fonts/Avenir-Book.ttf"),
                "Avenir-Light": require("./fonts/Avenir-Light.ttf")
            }));
            Promise.all(promises.concat(_components.Images.downloadAsync())).then(function () {
                return _this2.setState({ ready: true });
            }).catch(function (error) {
                return console.error(error);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var ready = this.state.ready;

            return _react2.default.createElement(
                _nativeBase.StyleProvider,
                { style: (0, _components3.default)(_commonColor2.default), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                },
                ready ? _react2.default.createElement(AppNavigator, { onNavigationStateChange: function onNavigationStateChange() {
                        return undefined;
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }) : _react2.default.createElement(_expo.AppLoading, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                })
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;


(0, _mobx.useStrict)(true);

var MainNavigator = (0, _reactNavigation.DrawerNavigator)({
    Home: { screen: _home.Home },
    Calendar: { screen: _calendar.Calendar },
    Overview: { screen: _overview.Overview },
    Groups: { screen: _groups.Groups },
    Lists: { screen: _lists.Lists },
    Profile: { screen: _profile.Profile },
    Timeline: { screen: _timeline.Timeline },
    Settings: { screen: _settings.Settings },
    Create: { screen: _create.Create }
}, {
    drawerWidth: _reactNative.Dimensions.get("window").width,
    contentComponent: _drawer.Drawer
});

var AppNavigator = (0, _reactNavigation.StackNavigator)({
    Login: { screen: _login.Login },
    SignUp: { screen: _signUp.SignUp },
    Walkthrough: { screen: _walkthrough.Walkthrough },
    Main: { screen: MainNavigator }
}, { headerMode: "none" });

exports.AppNavigator = AppNavigator;