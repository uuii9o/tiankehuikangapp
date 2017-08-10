Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _reactNavigation = require("react-navigation");

var NavigationHelpers = function () {
    function NavigationHelpers() {
        babelHelpers.classCallCheck(this, NavigationHelpers);
    }

    babelHelpers.createClass(NavigationHelpers, null, [{
        key: "reset",
        value: function reset(navigation, route) {
            var action = _reactNavigation.NavigationActions.reset({
                index: 0,
                actions: [_reactNavigation.NavigationActions.navigate({ routeName: route })]
            });
            navigation.dispatch(action);
        }
    }]);
    return NavigationHelpers;
}();

exports.default = NavigationHelpers;