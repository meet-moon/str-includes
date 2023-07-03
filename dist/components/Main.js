"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Main = _ref => {
  let {
    divOnClick,
    threeDotsClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-[536px] h-[93px] justify-start items-start inline-flex",
    onClick: divOnClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grow shrink basis-0 self-stretch p-4 bg-neutral-50 border border border border border-zinc-300 flex-col justify-start items-start gap-3 inline-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "self-stretch h-[61px] flex-col justify-start items-end gap-2 flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "self-stretch justify-start items-start gap-1 inline-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "justify-start items-start gap-1 inline-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-col justify-start items-start gap-2.5 inline-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-black text-[10px] font-medium tracking-wide"
  }, "22:00 - 23:00"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-col justify-start items-start gap-2.5 flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-neutral-400 text-[10px] font-medium uppercase tracking-wide"
  }, "P1"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-right text-neutral-400 text-[18px] font-medium",
    onClick: threeDotsClick
  }, "\u2807")), /*#__PURE__*/_react.default.createElement("div", {
    className: "self-stretch justify-between items-center gap-[214px] inline-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-black text-[16px] font-medium"
  }, "Mowing"), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-[23px] h-[23px] relative"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-[23px] h-[23px] left-0 top-0 absolute opacity-60 bg-cyan-500 rounded-full"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-[23px] left-0 top-[4.62px] absolute text-center text-white text-[10px] font-semibold"
  }, "AP"))))));
};
Main.propTypes = {
  divOnClick: _propTypes.default.func,
  threeDotsClick: _propTypes.default.func
};
var _default = Main;
exports.default = _default;