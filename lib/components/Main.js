import PropTypes from 'prop-types';
import React from 'react'

const Main = ({ divOnClick, threeDotsClick }) => {
    return (
        <div className="w-[536px] h-[93px] justify-start items-start inline-flex" onClick={divOnClick}>
            <div className="grow shrink basis-0 self-stretch p-4 bg-neutral-50 border border border border border-zinc-300 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch h-[61px] flex-col justify-start items-end gap-2 flex">
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                            <div className="justify-start items-start gap-1 inline-flex">
                                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                    <div className="text-black text-[10px] font-medium tracking-wide">22:00 - 23:00</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2.5 flex">
                                <div className="text-neutral-400 text-[10px] font-medium uppercase tracking-wide">P1</div>
                            </div>
                        </div>
                        <div className="text-right text-neutral-400 text-[18px] font-medium" onClick={threeDotsClick}>⠇</div>
                    </div>
                    <div className="self-stretch justify-between items-center gap-[214px] inline-flex">
                        <div className="text-black text-[16px] font-medium">Mowing</div>
                        <div className="w-[23px] h-[23px] relative">
                            <div className="w-[23px] h-[23px] left-0 top-0 absolute opacity-60 bg-cyan-500 rounded-full" />
                            <div className="w-[23px] left-0 top-[4.62px] absolute text-center text-white text-[10px] font-semibold">AP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Main.propTypes = {
    divOnClick: PropTypes.func,
    threeDotsClick: PropTypes.func,
};

export default Main