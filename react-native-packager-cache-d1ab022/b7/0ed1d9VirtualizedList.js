
'use strict';

var _class,
    _temp,
    _initialiseProps,
    _jsxFileName = '/Users/yusong1/Desktop/tiankehuikangapp/node_modules/react-native/Libraries/CustomComponents/Lists/VirtualizedList.js';

var Batchinator = require('Batchinator');
var React = require('React');
var ReactNative = require('ReactNative');
var RefreshControl = require('RefreshControl');
var ScrollView = require('ScrollView');
var View = require('View');
var ViewabilityHelper = require('ViewabilityHelper');

var infoLog = require('infoLog');
var invariant = require('fbjs/lib/invariant');

var _require = require('VirtualizeUtils'),
    computeWindowedRenderLimits = _require.computeWindowedRenderLimits;

var _usedIndexForKey = false;

var VirtualizedList = (_temp = _class = function (_React$PureComponent) {
  babelHelpers.inherits(VirtualizedList, _React$PureComponent);
  babelHelpers.createClass(VirtualizedList, [{
    key: 'scrollToEnd',
    value: function scrollToEnd(params) {
      var animated = params ? params.animated : true;
      var veryLast = this.props.getItemCount(this.props.data) - 1;
      var frame = this._getFrameMetricsApprox(veryLast);
      var offset = frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength;
      this._scrollRef.scrollTo(this.props.horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(params) {
      var _props = this.props,
          data = _props.data,
          horizontal = _props.horizontal,
          getItemCount = _props.getItemCount;
      var animated = params.animated,
          index = params.index,
          viewPosition = params.viewPosition;

      if (!(index >= 0 && index < getItemCount(data))) {
        console.warn('scrollToIndex out of range ' + index);
        return;
      }
      var frame = this._getFrameMetricsApprox(index);
      var offset = Math.max(0, frame.offset - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length));
      this._scrollRef.scrollTo(horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'scrollToItem',
    value: function scrollToItem(params) {
      var item = params.item;
      var _props2 = this.props,
          data = _props2.data,
          getItem = _props2.getItem,
          getItemCount = _props2.getItemCount;

      var itemCount = getItemCount(data);
      for (var _index = 0; _index < itemCount; _index++) {
        if (getItem(data, _index) === item) {
          this.scrollToIndex(babelHelpers.extends({}, params, { index: _index }));
          break;
        }
      }
    }
  }, {
    key: 'scrollToOffset',
    value: function scrollToOffset(params) {
      var animated = params.animated,
          offset = params.offset;

      this._scrollRef.scrollTo(this.props.horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'recordInteraction',
    value: function recordInteraction() {
      this._viewabilityHelper.recordInteraction();
      this._updateViewableItems(this.props.data);
    }
  }, {
    key: 'getScrollableNode',
    value: function getScrollableNode() {
      if (this._scrollRef && this._scrollRef.getScrollableNode) {
        return this._scrollRef.getScrollableNode();
      } else {
        return ReactNative.findNodeHandle(this._scrollRef);
      }
    }
  }]);

  function VirtualizedList(props) {
    babelHelpers.classCallCheck(this, VirtualizedList);

    var _this = babelHelpers.possibleConstructorReturn(this, (VirtualizedList.__proto__ || Object.getPrototypeOf(VirtualizedList)).call(this, props));

    _initialiseProps.call(_this);

    invariant(!props.onScroll || !props.onScroll.__isNative, 'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent ' + 'to support native onScroll events with useNativeDriver');

    _this._updateCellsToRenderBatcher = new Batchinator(_this._updateCellsToRender, _this.props.updateCellsBatchingPeriod);
    _this._viewabilityHelper = new ViewabilityHelper(_this.props.viewabilityConfig);
    _this.state = {
      first: 0,
      last: Math.min(_this.props.getItemCount(_this.props.data), _this.props.initialNumToRender) - 1
    };
    return _this;
  }

  babelHelpers.createClass(VirtualizedList, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateViewableItems(null);
      this._updateCellsToRenderBatcher.dispose();
      this._viewabilityHelper.dispose();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var data = newProps.data,
          getItemCount = newProps.getItemCount,
          maxToRenderPerBatch = newProps.maxToRenderPerBatch;

      this.setState({
        first: Math.max(0, Math.min(this.state.first, getItemCount(data) - 1 - maxToRenderPerBatch)),
        last: Math.max(0, Math.min(this.state.last, getItemCount(data) - 1))
      });
      this._updateCellsToRenderBatcher.schedule();
    }
  }, {
    key: '_pushCells',
    value: function _pushCells(cells, first, last) {
      var _props3 = this.props,
          ItemSeparatorComponent = _props3.ItemSeparatorComponent,
          data = _props3.data,
          getItem = _props3.getItem,
          getItemCount = _props3.getItemCount,
          keyExtractor = _props3.keyExtractor;

      var end = getItemCount(data) - 1;
      last = Math.min(end, last);
      for (var ii = first; ii <= last; ii++) {
        var _item = getItem(data, ii);
        invariant(_item, 'No item for index ' + ii);
        var key = keyExtractor(_item, ii);
        cells.push(React.createElement(CellRenderer, {
          cellKey: key,
          index: ii,
          item: _item,
          key: key,
          onLayout: this._onCellLayout,
          onUnmount: this._onCellUnmount,
          parentProps: this.props,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          }
        }));
        if (ItemSeparatorComponent && ii < end) {
          cells.push(React.createElement(ItemSeparatorComponent, { key: 'sep' + ii, __source: {
              fileName: _jsxFileName,
              lineNumber: 354
            }
          }));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          ListFooterComponent = _props4.ListFooterComponent,
          ListHeaderComponent = _props4.ListHeaderComponent;
      var _props5 = this.props,
          data = _props5.data,
          disableVirtualization = _props5.disableVirtualization,
          horizontal = _props5.horizontal;

      var cells = [];
      if (ListHeaderComponent) {
        cells.push(React.createElement(
          View,
          { key: '$header', onLayout: this._onLayoutHeader, __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            }
          },
          React.createElement(ListHeaderComponent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            }
          })
        ));
      }
      var itemCount = this.props.getItemCount(data);
      if (itemCount > 0) {
        _usedIndexForKey = false;
        var lastInitialIndex = this.props.initialNumToRender - 1;
        var _state = this.state,
            _first = _state.first,
            _last = _state.last;

        this._pushCells(cells, 0, lastInitialIndex);
        if (!disableVirtualization && _first > lastInitialIndex) {
          var initBlock = this._getFrameMetricsApprox(lastInitialIndex);
          var firstSpace = this._getFrameMetricsApprox(_first).offset - (initBlock.offset + initBlock.length);
          cells.push(React.createElement(View, { key: '$lead_spacer', style: babelHelpers.defineProperty({}, !horizontal ? 'height' : 'width', firstSpace), __source: {
              fileName: _jsxFileName,
              lineNumber: 380
            }
          }));
        }
        this._pushCells(cells, Math.max(lastInitialIndex + 1, _first), _last);
        if (!this._hasWarned.keys && _usedIndexForKey) {
          console.warn('VirtualizedList: missing keys for items, make sure to specify a key property on each ' + 'item or provide a custom keyExtractor.');
          this._hasWarned.keys = true;
        }
        if (!disableVirtualization && _last < itemCount - 1) {
          var lastFrame = this._getFrameMetricsApprox(_last);
          var end = this.props.getItemLayout ? itemCount - 1 : Math.min(itemCount - 1, this._highestMeasuredFrameIndex);
          var endFrame = this._getFrameMetricsApprox(end);
          var tailSpacerLength = endFrame.offset + endFrame.length - (lastFrame.offset + lastFrame.length);
          cells.push(React.createElement(View, { key: '$tail_spacer', style: babelHelpers.defineProperty({}, !horizontal ? 'height' : 'width', tailSpacerLength), __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            }
          }));
        }
      }
      if (ListFooterComponent) {
        cells.push(React.createElement(
          View,
          { key: '$footer', onLayout: this._onLayoutFooter, __source: {
              fileName: _jsxFileName,
              lineNumber: 407
            }
          },
          React.createElement(ListFooterComponent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 408
            }
          })
        ));
      }
      var ret = React.cloneElement(this.props.renderScrollComponent(this.props), {
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout,
        onScroll: this._onScroll,
        onScrollBeginDrag: this._onScrollBeginDrag,
        ref: this._captureScrollRef,
        scrollEventThrottle: 50 }, cells);
      if (this.props.debug) {
        return React.createElement(
          View,
          { style: { flex: 1 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 425
            }
          },
          ret,
          this._renderDebugOverlay()
        );
      } else {
        return ret;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateCellsToRenderBatcher.schedule();
    }
  }, {
    key: '_renderDebugOverlay',
    value: function _renderDebugOverlay() {
      var normalize = this._scrollMetrics.visibleLength / this._scrollMetrics.contentLength;
      var framesInLayout = [];
      var itemCount = this.props.getItemCount(this.props.data);
      for (var ii = 0; ii < itemCount; ii++) {
        var frame = this._getFrameMetricsApprox(ii);
        if (frame.inLayout) {
          framesInLayout.push(frame);
        }
      }
      var windowTop = this._getFrameMetricsApprox(this.state.first).offset;
      var frameLast = this._getFrameMetricsApprox(this.state.last);
      var windowLen = frameLast.offset + frameLast.length - windowTop;
      var visTop = this._scrollMetrics.offset;
      var visLen = this._scrollMetrics.visibleLength;
      var baseStyle = { position: 'absolute', top: 0, right: 0 };
      return React.createElement(
        View,
        { style: babelHelpers.extends({}, baseStyle, { bottom: 0, width: 20, borderColor: 'blue', borderWidth: 1 }), __source: {
            fileName: _jsxFileName,
            lineNumber: 516
          }
        },
        framesInLayout.map(function (f, ii) {
          return React.createElement(View, { key: 'f' + ii, style: babelHelpers.extends({}, baseStyle, {
              left: 0,
              top: f.offset * normalize,
              height: f.length * normalize,
              backgroundColor: 'orange'
            }), __source: {
              fileName: _jsxFileName,
              lineNumber: 518
            }
          });
        }),
        React.createElement(View, { style: babelHelpers.extends({}, baseStyle, {
            left: 0,
            top: windowTop * normalize,
            height: windowLen * normalize,
            borderColor: 'green',
            borderWidth: 2
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 526
          }
        }),
        React.createElement(View, { style: babelHelpers.extends({}, baseStyle, {
            left: 0,
            top: visTop * normalize,
            height: visLen * normalize,
            borderColor: 'red',
            borderWidth: 2
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 534
          }
        })
      );
    }
  }, {
    key: '_selectLength',
    value: function _selectLength(metrics) {
      return !this.props.horizontal ? metrics.height : metrics.width;
    }
  }, {
    key: '_selectOffset',
    value: function _selectOffset(metrics) {
      return !this.props.horizontal ? metrics.y : metrics.x;
    }
  }, {
    key: '_updateViewableItems',
    value: function _updateViewableItems(data) {
      var _props6 = this.props,
          getItemCount = _props6.getItemCount,
          onViewableItemsChanged = _props6.onViewableItemsChanged;

      if (!onViewableItemsChanged) {
        return;
      }
      this._viewabilityHelper.onUpdate(getItemCount(data), this._scrollMetrics.offset, this._scrollMetrics.visibleLength, this._getFrameMetrics, this._createViewToken, onViewableItemsChanged, this.state);
    }
  }]);
  return VirtualizedList;
}(React.PureComponent), _class.defaultProps = {
  disableVirtualization: false,
  getItem: function getItem(data, index) {
    return data[index];
  },
  getItemCount: function getItemCount(data) {
    return data ? data.length : 0;
  },
  horizontal: false,
  initialNumToRender: 10,
  keyExtractor: function keyExtractor(item, index) {
    if (item.key != null) {
      return item.key;
    }
    _usedIndexForKey = true;
    return String(index);
  },
  maxToRenderPerBatch: 10,
  onEndReached: function onEndReached() {},
  onEndReachedThreshold: 2,
  removeClippedSubviews: true,
  renderScrollComponent: function renderScrollComponent(props) {
    if (props.onRefresh) {
      invariant(typeof props.refreshing === 'boolean', '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(props.refreshing) + '`');
      return React.createElement(ScrollView, babelHelpers.extends({}, props, {
        refreshControl: React.createElement(RefreshControl, {
          refreshing: props.refreshing,
          onRefresh: props.onRefresh,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }));
    } else {
      return React.createElement(ScrollView, babelHelpers.extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }));
    }
  },
  shouldItemUpdate: function shouldItemUpdate(props, nextProps) {
    return true;
  },
  updateCellsBatchingPeriod: 50,
  windowSize: 21 }, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    first: 0,
    last: this.props.initialNumToRender
  };
  this._averageCellLength = 0;
  this._hasWarned = {};
  this._highestMeasuredFrameIndex = 0;
  this._headerLength = 0;
  this._frames = {};
  this._footerLength = 0;
  this._scrollMetrics = {
    visibleLength: 0, contentLength: 0, offset: 0, dt: 10, velocity: 0, timestamp: 0
  };
  this._scrollRef = null;
  this._sentEndForContentLength = 0;
  this._totalCellLength = 0;
  this._totalCellsMeasured = 0;

  this._captureScrollRef = function (ref) {
    _this2._scrollRef = ref;
  };

  this._onCellLayout = function (e, cellKey, index) {
    var layout = e.nativeEvent.layout;
    var next = {
      offset: _this2._selectOffset(layout),
      length: _this2._selectLength(layout),
      index: index,
      inLayout: true
    };
    var curr = _this2._frames[cellKey];
    if (!curr || next.offset !== curr.offset || next.length !== curr.length || index !== curr.index) {
      _this2._totalCellLength += next.length - (curr ? curr.length : 0);
      _this2._totalCellsMeasured += curr ? 0 : 1;
      _this2._averageCellLength = _this2._totalCellLength / _this2._totalCellsMeasured;
      _this2._frames[cellKey] = next;
      _this2._highestMeasuredFrameIndex = Math.max(_this2._highestMeasuredFrameIndex, index);
      _this2._updateCellsToRenderBatcher.schedule();
    }
  };

  this._onCellUnmount = function (cellKey) {
    var curr = _this2._frames[cellKey];
    if (curr) {
      _this2._frames[cellKey] = babelHelpers.extends({}, curr, { inLayout: false });
    }
  };

  this._onLayout = function (e) {
    _this2._scrollMetrics.visibleLength = _this2._selectLength(e.nativeEvent.layout);
    _this2.props.onLayout && _this2.props.onLayout(e);
    _this2._updateCellsToRenderBatcher.schedule();
  };

  this._onLayoutFooter = function (e) {
    _this2._footerLength = _this2._selectLength(e.nativeEvent.layout);
  };

  this._onLayoutHeader = function (e) {
    _this2._headerLength = _this2._selectLength(e.nativeEvent.layout);
  };

  this._onContentSizeChange = function (width, height) {
    _this2._scrollMetrics.contentLength = _this2._selectLength({ height: height, width: width });
    _this2._updateCellsToRenderBatcher.schedule();
  };

  this._onScroll = function (e) {
    if (_this2.props.onScroll) {
      _this2.props.onScroll(e);
    }
    var timestamp = e.timeStamp;
    var visibleLength = _this2._selectLength(e.nativeEvent.layoutMeasurement);
    var contentLength = _this2._selectLength(e.nativeEvent.contentSize);
    var offset = _this2._selectOffset(e.nativeEvent.contentOffset);
    var dt = Math.max(1, timestamp - _this2._scrollMetrics.timestamp);
    if (dt > 500 && _this2._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !_this2._hasWarned.perf) {
      infoLog('VirtualizedList: You have a large list that is slow to update - make sure ' + 'shouldItemUpdate is implemented effectively and consider getItemLayout, PureComponent, ' + 'etc.', { dt: dt, prevDt: _this2._scrollMetrics.dt, contentLength: contentLength });
      _this2._hasWarned.perf = true;
    }
    var dOffset = offset - _this2._scrollMetrics.offset;
    var velocity = dOffset / dt;
    _this2._scrollMetrics = { contentLength: contentLength, dt: dt, offset: offset, timestamp: timestamp, velocity: velocity, visibleLength: visibleLength };
    var _props7 = _this2.props,
        data = _props7.data,
        getItemCount = _props7.getItemCount,
        onEndReached = _props7.onEndReached,
        onEndReachedThreshold = _props7.onEndReachedThreshold,
        windowSize = _props7.windowSize;

    _this2._updateViewableItems(data);
    if (!data) {
      return;
    }
    var distanceFromEnd = contentLength - visibleLength - offset;
    var itemCount = getItemCount(data);
    if (distanceFromEnd < onEndReachedThreshold * visibleLength && _this2._scrollMetrics.contentLength !== _this2._sentEndForContentLength && _this2.state.last === itemCount - 1) {
      _this2._sentEndForContentLength = _this2._scrollMetrics.contentLength;
      onEndReached({ distanceFromEnd: distanceFromEnd });
    }
    var _state2 = _this2.state,
        first = _state2.first,
        last = _state2.last;

    if (first > 0 && velocity < 0 || last < itemCount - 1 && velocity > 0) {
      var distanceToContentEdge = Math.min(Math.abs(_this2._getFrameMetricsApprox(first).offset - offset), Math.abs(_this2._getFrameMetricsApprox(last).offset - (offset + visibleLength)));
      var hiPri = distanceToContentEdge < windowSize * visibleLength / 4;
      if (hiPri) {
        _this2._updateCellsToRenderBatcher.dispose({ abort: true });
        _this2._updateCellsToRender();
        return;
      }
    }
    _this2._updateCellsToRenderBatcher.schedule();
  };

  this._onScrollBeginDrag = function (e) {
    _this2._viewabilityHelper.recordInteraction();
    _this2.props.onScrollBeginDrag && _this2.props.onScrollBeginDrag(e);
  };

  this._updateCellsToRender = function () {
    var _props8 = _this2.props,
        data = _props8.data,
        disableVirtualization = _props8.disableVirtualization,
        getItemCount = _props8.getItemCount,
        onEndReachedThreshold = _props8.onEndReachedThreshold;

    _this2._updateViewableItems(data);
    if (!data) {
      return;
    }
    _this2.setState(function (state) {
      var newState = void 0;
      if (!disableVirtualization) {
        newState = computeWindowedRenderLimits(_this2.props, state, _this2._getFrameMetricsApprox, _this2._scrollMetrics);
      } else {
        var _scrollMetrics = _this2._scrollMetrics,
            contentLength = _scrollMetrics.contentLength,
            _offset = _scrollMetrics.offset,
            visibleLength = _scrollMetrics.visibleLength;

        var _distanceFromEnd = contentLength - visibleLength - _offset;
        var renderAhead = _distanceFromEnd < onEndReachedThreshold * visibleLength ? _this2.props.maxToRenderPerBatch : 0;
        newState = {
          first: 0,
          last: Math.min(state.last + renderAhead, getItemCount(data) - 1)
        };
      }
      return newState;
    });
  };

  this._createViewToken = function (index, isViewable) {
    var _props9 = _this2.props,
        data = _props9.data,
        getItem = _props9.getItem,
        keyExtractor = _props9.keyExtractor;

    var item = getItem(data, index);
    invariant(item, 'Missing item for index ' + index);
    return { index: index, item: item, key: keyExtractor(item, index), isViewable: isViewable };
  };

  this._getFrameMetricsApprox = function (index) {
    var frame = _this2._getFrameMetrics(index);
    if (frame && frame.index === index) {
      return frame;
    } else {
      var _getItemLayout = _this2.props.getItemLayout;

      invariant(!_getItemLayout, 'Should not have to estimate frames when a measurement metrics function is provided');
      return {
        length: _this2._averageCellLength,
        offset: _this2._averageCellLength * index
      };
    }
  };

  this._getFrameMetrics = function (index) {
    var _props10 = _this2.props,
        data = _props10.data,
        getItem = _props10.getItem,
        getItemCount = _props10.getItemCount,
        getItemLayout = _props10.getItemLayout,
        keyExtractor = _props10.keyExtractor;

    invariant(getItemCount(data) > index, 'Tried to get frame for out of range index ' + index);
    var item = getItem(data, index);
    var frame = item && _this2._frames[keyExtractor(item, index)];
    if (!frame || frame.index !== index) {
      if (getItemLayout) {
        frame = getItemLayout(data, index);
      }
    }
    return frame;
  };
}, _temp);

var CellRenderer = function (_React$Component) {
  babelHelpers.inherits(CellRenderer, _React$Component);

  function CellRenderer() {
    var _ref3;

    var _temp2, _this3, _ret;

    babelHelpers.classCallCheck(this, CellRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this3 = babelHelpers.possibleConstructorReturn(this, (_ref3 = CellRenderer.__proto__ || Object.getPrototypeOf(CellRenderer)).call.apply(_ref3, [this].concat(args))), _this3), _this3._onLayout = function (e) {
      _this3.props.onLayout(e, _this3.props.cellKey, _this3.props.index);
    }, _temp2), babelHelpers.possibleConstructorReturn(_this3, _ret);
  }

  babelHelpers.createClass(CellRenderer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onUnmount(this.props.cellKey);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var curr = { item: this.props.item, index: this.props.index };
      var next = { item: nextProps.item, index: nextProps.index };
      return nextProps.parentProps.shouldItemUpdate(curr, next);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props11 = this.props,
          item = _props11.item,
          index = _props11.index,
          parentProps = _props11.parentProps;
      var renderItem = parentProps.renderItem,
          getItemLayout = parentProps.getItemLayout;

      invariant(renderItem, 'no renderItem!');
      var element = renderItem({ item: item, index: index });
      if (getItemLayout && !parentProps.debug) {
        return element;
      }
      return React.createElement(
        View,
        { onLayout: this._onLayout, __source: {
            fileName: _jsxFileName,
            lineNumber: 733
          }
        },
        element
      );
    }
  }]);
  return CellRenderer;
}(React.Component);

module.exports = VirtualizedList;