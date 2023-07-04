"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Activity = function (_a) {
    var handleDivClick = _a.handleDivClick, handleOptionClick = _a.handleOptionClick;
    return (react_1.default.createElement("div", { className: 'Property1Default w-[343px] h-[76px] lg:w-[536px] lg:h-[93px] justify-start items-center lg:items-start inline-flex', onClick: handleDivClick },
        react_1.default.createElement("div", { className: 'Activity grow shrink basis-0 self-stretch p-4 bg-neutral-50 border border border border lg:border-zinc-300 flex-col justify-start items-start gap-3 inline-flex' },
            react_1.default.createElement("div", { className: 'ActivityContent self-stretch h-[11px] lg:h-[61px] flex-col justify-start items-start lg:items-end gap-2 flex' },
                react_1.default.createElement("div", { className: 'Detail self-stretch justify-start items-start gap-1 inline-flex' },
                    react_1.default.createElement("div", { className: 'Header grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex' },
                        react_1.default.createElement("div", { className: 'DescriptionTime justify-start items-start gap-1 inline-flex' },
                            react_1.default.createElement("div", { className: 'Time flex-col justify-start items-start gap-2.5 inline-flex' },
                                react_1.default.createElement("div", { className: '002300 text-neutral-400 lg:text-black text-[10px] font-medium tracking-wide' }, "22:00 - 23:00"))),
                        react_1.default.createElement("div", { className: 'MachinePitch flex-col justify-start items-start gap-2.5 hidden lg:block' },
                            react_1.default.createElement("div", { className: 'P1 text-neutral-400 text-[10px] font-medium uppercase tracking-wide' }, "P1"))),
                    react_1.default.createElement("div", { className: 'text-right text-neutral-400 text-[18px] font-medium hidden lg:block', onClick: function (e) {
                            e.stopPropagation();
                            handleOptionClick && handleOptionClick(e);
                        } }, "\u2807")),
                react_1.default.createElement("div", { className: 'Title self-stretch justify-between items-center gap-[214px] inline-flex' },
                    react_1.default.createElement("div", { className: 'Mowing text-black text-[16px] font-medium' }, "Mowing"),
                    react_1.default.createElement("div", { className: 'NameTag w-[23px] h-[23px] relative' },
                        react_1.default.createElement("div", { className: 'Bg w-[23px] h-[23px] left-0 top-0 absolute opacity-60 bg-cyan-500 rounded-full' }),
                        react_1.default.createElement("div", { className: 'Ap w-[23px] left-0 top-[4.62px] absolute text-center text-white text-[10px] font-semibold' }, "AP")))))));
};
exports.default = Activity;
//# sourceMappingURL=Activity.js.map