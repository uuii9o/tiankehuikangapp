
'use strict';

var _jsxFileName = '/Users/yusong1/Desktop/tiankehuikangapp/node_modules/react-native/Libraries/Image/Image.ios.js';
var EdgeInsetsPropType = require('EdgeInsetsPropType');
var ImageResizeMode = require('ImageResizeMode');
var ImageSourcePropType = require('ImageSourcePropType');
var ImageStylePropTypes = require('ImageStylePropTypes');
var NativeMethodsMixin = require('NativeMethodsMixin');
var NativeModules = require('NativeModules');
var React = require('React');
var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var StyleSheet = require('StyleSheet');
var StyleSheetPropType = require('StyleSheetPropType');

var flattenStyle = require('flattenStyle');
var requireNativeComponent = require('requireNativeComponent');
var resolveAssetSource = require('resolveAssetSource');

var PropTypes = React.PropTypes;

var ImageViewManager = NativeModules.ImageViewManager;

var Image = React.createClass({
  displayName: 'Image',

  propTypes: {
    style: StyleSheetPropType(ImageStylePropTypes),

    source: ImageSourcePropType,

    defaultSource: PropTypes.oneOfType([PropTypes.shape({
      uri: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      scale: PropTypes.number
    }), PropTypes.number]),

    accessible: PropTypes.bool,

    accessibilityLabel: PropTypes.node,

    blurRadius: PropTypes.number,

    capInsets: EdgeInsetsPropType,

    resizeMethod: PropTypes.oneOf(['auto', 'resize', 'scale']),

    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),

    testID: PropTypes.string,

    onLayout: PropTypes.func,

    onLoadStart: PropTypes.func,

    onProgress: PropTypes.func,

    onError: PropTypes.func,

    onPartialLoad: PropTypes.func,

    onLoad: PropTypes.func,

    onLoadEnd: PropTypes.func
  },

  statics: {
    resizeMode: ImageResizeMode,

    getSize: function getSize(uri, success, failure) {
      ImageViewManager.getSize(uri, success, failure || function () {
        console.warn('Failed to get size for image: ' + uri);
      });
    },
    prefetch: function prefetch(url) {
      return ImageViewManager.prefetchImage(url);
    },

    resolveAssetSource: resolveAssetSource
  },

  mixins: [NativeMethodsMixin],

  viewConfig: {
    uiViewClassName: 'UIView',
    validAttributes: ReactNativeViewAttributes.UIView
  },

  render: function render() {
    var source = resolveAssetSource(this.props.source) || { uri: undefined, width: undefined, height: undefined };

    var sources = void 0;
    var style = void 0;
    if (Array.isArray(source)) {
      style = flattenStyle([styles.base, this.props.style]) || {};
      sources = source;
    } else {
      var _width = source.width,
          _height = source.height,
          uri = source.uri;

      style = flattenStyle([{ width: _width, height: _height }, styles.base, this.props.style]) || {};
      sources = [source];

      if (uri === '') {
        console.warn('source.uri should not be an empty string');
      }
    }

    var resizeMode = this.props.resizeMode || (style || {}).resizeMode || 'cover';
    var tintColor = (style || {}).tintColor;

    if (this.props.src) {
      console.warn('The <Image> component requires a `source` property rather than `src`.');
    }

    return React.createElement(RCTImageView, babelHelpers.extends({}, this.props, {
      style: style,
      resizeMode: resizeMode,
      tintColor: tintColor,
      source: sources,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      }
    }));
  }
});

var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

var RCTImageView = requireNativeComponent('RCTImageView', Image);

module.exports = Image;