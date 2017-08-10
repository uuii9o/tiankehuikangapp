Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class, _temp;

var _expo = require("expo");

var Images = (_temp = _class = function () {
    function Images() {
        babelHelpers.classCallCheck(this, Images);
    }

    babelHelpers.createClass(Images, null, [{
        key: "downloadAsync",
        value: function downloadAsync() {
            return [_expo.Asset.fromModule(Images.login).downloadAsync(), _expo.Asset.fromModule(Images.signUp).downloadAsync(), _expo.Asset.fromModule(Images.walkthrough).downloadAsync(), _expo.Asset.fromModule(Images.profile).downloadAsync(), _expo.Asset.fromModule(Images.defaultAvatar).downloadAsync(), _expo.Asset.fromModule(Images.avatar1).downloadAsync(), _expo.Asset.fromModule(Images.avatar2).downloadAsync(), _expo.Asset.fromModule(Images.avatar3).downloadAsync(), _expo.Asset.fromModule(Images.music).downloadAsync(), _expo.Asset.fromModule(Images.architecture).downloadAsync(), _expo.Asset.fromModule(Images.travel).downloadAsync()];
        }
    }]);
    return Images;
}(), _class.login = require("./login.jpg"), _class.signUp = require("./signUp.jpg"), _class.walkthrough = require("./walkthrough.jpg"), _class.profile = require("./profile.jpg"), _class.defaultAvatar = require("./avatars/default-avatar.jpg"), _class.avatar1 = require("./avatars/avatar-1.jpg"), _class.avatar2 = require("./avatars/avatar-2.jpg"), _class.avatar3 = require("./avatars/avatar-3.jpg"), _class.music = require("./music.jpg"), _class.architecture = require("./architecture.jpg"), _class.travel = require("./travel.jpg"), _temp);
exports.default = Images;