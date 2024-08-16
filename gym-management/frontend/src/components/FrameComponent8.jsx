
const FrameComponent8 = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[86px] pb-[252px] pl-[29px] pr-0 box-border gap-[18px] z-[1] text-left text-mini text-white font-poppins mq450:pt-9 mq450:pb-[107px] mq450:box-border mq1000:pt-14 mq1000:pb-[164px] mq1000:box-border ${className}`}
    >
      <div className="w-[226px] h-[817px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden" />
      <div className="w-[181px] flex flex-row items-start justify-start pt-0 px-1 pb-8 box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-2.5">
          <div className="flex flex-row items-start justify-start py-0 px-[52px]">
            <img
              className="h-[51px] w-[51px] relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/personcircle1.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2]">
              Administrator Name
            </h3>
            <div className="w-40 relative text-3xs text-center inline-block whitespace-nowrap z-[2] mt-[-2px]">
              juan.delacruz@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[19px] text-xs">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="w-[166px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
                <img
                  className="h-5 w-5 relative min-h-[20px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector2.svg"
                />
                <a href="/admin-dashboard-page" className="[text-decoration:none] flex-1 relative text-[inherit] z-[2]">
                  Dashboard
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-4 text-3xs">
                <img
                  className="h-5 w-5 relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-61.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <a href="/admin-profile-page" className="self-stretch relative z-[2]">
                    Admiin Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[9px] px-[13px] bg-whitesmoke-100 self-stretch shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs flex flex-row items-start justify-start gap-[19px] z-[2]">
            <div className="h-[35px] w-[197px] relative shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100 hidden" />
            <img
              className="h-[17px] w-[17px] relative overflow-hidden shrink-0 min-h-[17px] z-[3]"
              alt=""
              src="/pencilsquare2.svg"
            />
            <div className="w-[104px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <a href="/registration-page" className="self-stretch relative text-3xs font-poppins text-midnightblue-100 text-left z-[3]">
                Registration
              </a>
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[9px] text-3xs">
          <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
            <div className="flex flex-col items-end justify-start gap-[17.5px]">
              <div className="flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/journalcheck1.svg"
                />
              </div>
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/creditcard2back2.svg"
              />
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/materialsymbolsinventory2outline.svg"
              />
              <div className="flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/people.svg"
                />
              </div>
              <img
                className="w-5 h-5 relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22.8px]">
                <a href="/plan-page" className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 relative z-[2]">Plan</div>
                </a>
                <a href="/point-of-sale" className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 relative z-[2]">Payment</div>
                </a>
                <a href="/equipment-inventory" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <div className="flex-1 relative z-[2]">Inventory</div>
                </a>
                <a href="/view-members" className="self-stretch relative z-[2]">View Members</a>
                <a href="/coaches" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <div className="flex-1 relative z-[2]">Coaches</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[169px] flex flex-row items-start justify-start py-0 px-[15px] box-border text-3xs">
        <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/book.svg"
          />
          <a href="/sales-report" className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="self-stretch relative z-[2]">Report</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
