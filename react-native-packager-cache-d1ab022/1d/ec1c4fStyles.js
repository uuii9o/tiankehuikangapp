Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require("react-native");

var _commonColor = require("../../native-base-theme/variables/commonColor");

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var Styles = _reactNative.StyleSheet.create({
    header: {
        width: width,
        height: width * 440 / 750
    },
    flexGrow: {
        flex: 1
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    textCentered: {
        textAlign: "center"
    },
    bg: {
        backgroundColor: "white"
    },
    row: {
        flexDirection: "row"
    },
    whiteBg: {
        backgroundColor: "white"
    },
    whiteText: {
        color: "white"
    },
    grayText: {
        color: _commonColor2.default.listBorderColor
    },
    listItem: {
        flexDirection: "row",
        borderBottomWidth: _commonColor2.default.borderWidth,
        borderColor: _commonColor2.default.listBorderColor,
        marginHorizontal: _commonColor2.default.contentPadding * 2
    },
    form: {
        marginHorizontal: _commonColor2.default.contentPadding * 2
    }
});

exports.default = Styles;