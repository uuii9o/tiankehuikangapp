
'use strict';

var invariant = require('fbjs/lib/invariant');

function elementsThatOverlapOffsets(offsets, itemCount, getFrameMetrics) {
  var out = [];
  for (var ii = 0; ii < itemCount; ii++) {
    var frame = getFrameMetrics(ii);
    var trailingOffset = frame.offset + frame.length;
    for (var kk = 0; kk < offsets.length; kk++) {
      if (out[kk] == null && trailingOffset >= offsets[kk]) {
        out[kk] = ii;
        if (kk === offsets.length - 1) {
          invariant(out.length === offsets.length, 'bad offsets input, should be in increasing order ' + JSON.stringify(offsets));
          return out;
        }
      }
    }
  }
  return out;
}

function newRangeCount(prev, next) {
  return next.last - next.first + 1 - Math.max(0, 1 + Math.min(next.last, prev.last) - Math.max(next.first, prev.first));
}

function computeWindowedRenderLimits(props, prev, getFrameMetricsApprox, scrollMetrics) {
  var data = props.data,
      getItemCount = props.getItemCount,
      maxToRenderPerBatch = props.maxToRenderPerBatch,
      windowSize = props.windowSize;

  var itemCount = getItemCount(data);
  if (itemCount === 0) {
    return prev;
  }
  var offset = scrollMetrics.offset,
      velocity = scrollMetrics.velocity,
      visibleLength = scrollMetrics.visibleLength;

  var visibleBegin = Math.max(0, offset);
  var visibleEnd = visibleBegin + visibleLength;
  var overscanLength = (windowSize - 1) * visibleLength;
  var leadFactor = Math.max(0, Math.min(1, velocity / 5 + 0.5));
  var overscanBegin = Math.max(0, visibleBegin - (1 - leadFactor) * overscanLength);
  var overscanEnd = Math.max(0, visibleEnd + leadFactor * overscanLength);

  var _elementsThatOverlapO = elementsThatOverlapOffsets([overscanBegin, visibleBegin, visibleEnd, overscanEnd], props.getItemCount(props.data), getFrameMetricsApprox),
      _elementsThatOverlapO2 = babelHelpers.slicedToArray(_elementsThatOverlapO, 4),
      overscanFirst = _elementsThatOverlapO2[0],
      first = _elementsThatOverlapO2[1],
      last = _elementsThatOverlapO2[2],
      overscanLast = _elementsThatOverlapO2[3];

  overscanFirst = overscanFirst == null ? 0 : overscanFirst;
  first = first == null ? Math.max(0, overscanFirst) : first;
  overscanLast = overscanLast == null ? itemCount - 1 : overscanLast;
  last = last == null ? Math.min(overscanLast, first + maxToRenderPerBatch - 1) : last;
  var visible = { first: first, last: last };

  var newCellCount = newRangeCount(prev, visible);

  while (true) {
    if (first <= overscanFirst && last >= overscanLast) {
      break;
    }
    var maxNewCells = newCellCount >= maxToRenderPerBatch;
    var firstWillAddMore = first <= prev.first || first > prev.last;
    var firstShouldIncrement = first > overscanFirst && (!maxNewCells || !firstWillAddMore);
    var lastWillAddMore = last >= prev.last || last < prev.first;
    var lastShouldIncrement = last < overscanLast && (!maxNewCells || !lastWillAddMore);
    if (maxNewCells && !firstShouldIncrement && !lastShouldIncrement) {
      break;
    }
    if (firstShouldIncrement) {
      if (firstWillAddMore) {
        newCellCount++;
      }
      first--;
    }
    if (lastShouldIncrement) {
      if (lastWillAddMore) {
        newCellCount++;
      }
      last++;
    }
  }
  if (!(last >= first && first >= 0 && last < itemCount && first >= overscanFirst && last <= overscanLast && first <= visible.first && last >= visible.last)) {
    throw new Error('Bad window calculation ' + JSON.stringify({ first: first, last: last, itemCount: itemCount, overscanFirst: overscanFirst, overscanLast: overscanLast, visible: visible }));
  }
  return { first: first, last: last };
}

var VirtualizeUtils = {
  computeWindowedRenderLimits: computeWindowedRenderLimits,
  elementsThatOverlapOffsets: elementsThatOverlapOffsets,
  newRangeCount: newRangeCount
};

module.exports = VirtualizeUtils;