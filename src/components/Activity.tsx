import React from "react";
interface IActivity {
  title: string;
  details: string;
  time: string;
  user: string;
  handleDivClick?: React.MouseEventHandler<HTMLDivElement>;
  handleOptionClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 *
 * @param title is a Activity title
 * @param details is a Activity description
 * @param time is a Activity time
 * @param user is a Activity done by user
 * @param handleDivClick is a click event of the Activity
 * @param handleOptionClick is a click event of option button inside of the Activity
 */
const Activity = ({
  title,
  details,
  time,
  user,
  handleDivClick,
  handleOptionClick,
}: IActivity) => {
  return (
    <div
      className='Property1Default w-[343px] h-[76px] lg:w-[536px] lg:h-[93px] justify-start items-center lg:items-start inline-flex'
      onClick={handleDivClick}
    >
      <div className='Activity grow shrink basis-0 self-stretch p-4 bg-neutral-50 border border border border lg:border-zinc-300 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='ActivityContent self-stretch h-[11px] lg:h-[61px] flex-col justify-start items-start lg:items-end gap-2 flex'>
          <div className='Detail self-stretch justify-start items-start gap-1 inline-flex'>
            <div className='Header grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
              <div className='DescriptionTime justify-start items-start gap-1 inline-flex'>
                <div className='Time flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className='002300 text-neutral-400 lg:text-black text-[10px] font-medium tracking-wide'>
                    {time}
                  </div>
                </div>
              </div>
              <div className='MachinePitch flex-col justify-start items-start gap-2.5 hidden lg:block'>
                <div className='P1 text-neutral-400 text-[10px] font-medium uppercase tracking-wide'>
                  {details}
                </div>
              </div>
            </div>
            <div
              className='text-right text-neutral-400 text-[18px] font-medium hidden lg:block'
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick && handleOptionClick(e);
              }}
            >
              ⠇
            </div>
          </div>
          <div className='Title self-stretch justify-between items-center gap-[214px] inline-flex'>
            <div className='Mowing text-black text-[16px] font-medium'>
              {title}
            </div>
            <div className='NameTag w-[23px] h-[23px] relative'>
              <div className='Bg w-[23px] h-[23px] left-0 top-0 absolute opacity-60 bg-cyan-500 rounded-full' />
              <div className='Ap w-[23px] left-0 top-[4.62px] absolute text-center text-white text-[10px] font-semibold'>
                {user}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
