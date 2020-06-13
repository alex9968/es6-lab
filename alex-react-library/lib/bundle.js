'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var core = require('@emotion/core');
var framerMotion = require('framer-motion');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "18cp10-Switch",
  styles: "width:100px;height:50px;position:relative;background:whitesmoke;border-radius:50px;;label:Switch;"
} : {
  name: "18cp10-Switch",
  styles: "width:100px;height:50px;position:relative;background:whitesmoke;border-radius:50px;;label:Switch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQjhDIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAgJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy9pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuLy8gY29uc3QgU3R5bGVkU3dpdGNoID0gc3R5bGVkLmgxYFxuLy8gY29sb3I6IGhvdHBpbms7XG4vLyBmb250LXNpemU6IDIwcHg7XG5cbmNvbnN0IFN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kZWxPblRhcCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oXCJ0YWJcIiwgc3RhdGUpXG4gICAgc2V0U3RhdGUoIXN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBjc3M9e2Nzc2BcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYH1cbiAgICAgIG9uVGFwPXtoYW5kZWxPblRhcH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2JhbGwnIGNzcz17Y3NzYFxuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAke3N0YXRlID8gJ3Vuc2V0JyA6IDB9O1xuICAgICAgcmlnaHQ6ICR7c3RhdGUgPyAgMCA6ICd1bnNldCd9O1xuICAgICAgYH1cbiAgICAgICAgcG9zaXRpb25UcmFuc2l0aW9uXG4gICAgICA+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Switch = function Switch() {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handelOnTap = function handelOnTap() {
    console.info("tab", state);
    setState(!state);
  };

  return core.jsx(framerMotion.motion.div, {
    className: "container",
    css: _ref,
    onTap: handelOnTap
  }, core.jsx(framerMotion.motion.div, {
    className: "ball",
    css: /*#__PURE__*/core.css("width:50px;height:50px;background:yellow;border-radius:50%;position:absolute;left:", state ? 'unset' : 0, ";right:", state ? 0 : 'unset', ";;label:Switch;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjJDIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAgJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy9pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuLy8gY29uc3QgU3R5bGVkU3dpdGNoID0gc3R5bGVkLmgxYFxuLy8gY29sb3I6IGhvdHBpbms7XG4vLyBmb250LXNpemU6IDIwcHg7XG5cbmNvbnN0IFN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kZWxPblRhcCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oXCJ0YWJcIiwgc3RhdGUpXG4gICAgc2V0U3RhdGUoIXN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBjc3M9e2Nzc2BcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYH1cbiAgICAgIG9uVGFwPXtoYW5kZWxPblRhcH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2JhbGwnIGNzcz17Y3NzYFxuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAke3N0YXRlID8gJ3Vuc2V0JyA6IDB9O1xuICAgICAgcmlnaHQ6ICR7c3RhdGUgPyAgMCA6ICd1bnNldCd9O1xuICAgICAgYH1cbiAgICAgICAgcG9zaXRpb25UcmFuc2l0aW9uXG4gICAgICA+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFxuIl19 */")),
    positionTransition: true
  }));
};

exports.Switch = Switch;
