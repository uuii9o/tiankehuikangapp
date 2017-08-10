Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require("react-native");

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

exports.default = {
    width: width,
    height: _reactNative.Platform.OS === "ios" ? height : height - _reactNative.StatusBar.currentHeight
};