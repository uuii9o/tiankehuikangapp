Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = babelHelpers.interopRequireDefault(_color);

var _reactNative = require('react-native');

var deviceHeight = _reactNative.Dimensions.get('window').height;
var deviceWidth = _reactNative.Dimensions.get('window').width;
var platform = _reactNative.Platform.OS;
var platformStyle = undefined;

var white = "white";
var black = "rgb(29, 29, 38)";
var gray = "rgba(255, 255, 255, .5)";
var lightGray = "#f8f8f8";

exports.default = {
  platformStyle: platformStyle,
  platform: platform,

  androidRipple: true,
  androidRippleColor: 'rgba(255, 255, 255, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

  badgeBg: '#ED1727',
  badgeColor: '#fff',

  badgePadding: 3,

  btnFontFamily: "Avenir-Book",
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  CheckboxRadius: 13,
  CheckboxBorderWidth: 1,
  CheckboxPaddingLeft: 4,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 21,
  CheckboxIconMarginTop: undefined,
  CheckboxFontSize: 23 / 0.9,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: 'transparent',

  segmentBackgroundColor: '#3F51B5',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: '#3F51B5',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',

  get defaultTextColor() {
    return this.textColor;
  },

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return this.fontSizeBase * 1.1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 0,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  cardDefaultBg: '#fff',

  brandPrimary: 'rgba(227, 81, 188, .75)',
  brandInfo: '#00BAFF',
  brandSecondary: '#D667CE',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',
  white: white,
  black: black,
  gray: gray,
  lightGray: lightGray,

  fontFamily: 'Avenir-Book',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  footerHeight: 55,
  footerDefaultBg: "transparent",

  tabBarTextColor: 'white',
  tabBarTextSize: 14,
  activeTab: '#007aff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: "transparent",

  tabDefaultBg: 'transparent',
  topTabBarTextColor: '#b3c7f9',
  topTabBarActiveTextColor: '#fff',
  topTabActiveBgColor: '#1569f4',
  topTabBarBorderColor: '#fff',
  get topTabBarActiveBorderColor() {
    return "white";
  },

  toolbarBtnColor: "white",
  toolbarDefaultBg: '#00BAFF',
  toolbarHeight: 64,
  toolbarIconSize: 20,
  toolbarSearchIconSize: 20,
  toolbarInputColor: '#CECDD2',
  searchBarHeight: 30,
  toolbarInverseBg: '#222',
  toolbarTextColor: "white",
  iosStatusbar: 'light-content',
  toolbarDefaultBorder: '#2874F0',
  get statusBarColor() {
    return (0, _color2.default)(this.toolbarDefaultBg).darken(0.2).hexString();
  },

  iconFamily: 'Ionicons',
  iconFontSize: 30,
  iconMargin: 7,
  iconHeaderSize: 33,

  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  inputColorPlaceholder: "white",

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  btnLineHeight: 24,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: 37,
  lineHeight: 20,

  listBorderColor: 'rgba(255, 255, 255, .5)',
  listDividerBg: lightGray,
  listItemHeight: 45,
  listBtnUnderlayColor: '#DDD',

  cardBorderColor: '#ccc',

  listItemPadding: 10,

  listNoteColor: '#808080',
  listNoteSize: 13,

  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  radioBtnSize: 25,
  radioSelectedColorAndroid: '#5067FF',

  radioBtnLineHeight: 29,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return (0, _color2.default)(this.radioColor).darken(0.2).hexString();
  },

  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',

  textColor: "white",
  inverseTextColor: 'black',
  noteFontSize: 14,

  titleFontfamily: "Avenir-Light",
  titleFontSize: 17,
  subTitleFontSize: 12,
  subtitleColor: '#FFF',

  titleFontColor: "white",

  borderRadiusBase: 0,
  borderWidth: 1 / _reactNative.PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,

  get darkenHeader() {
    return (0, _color2.default)(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth: deviceWidth,
  deviceHeight: deviceHeight,

  inputGroupRoundedBorderRadius: 30
};