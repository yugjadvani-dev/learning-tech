
const FrameComponent9 = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[232px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[47px] pb-[50px] pl-[29px] pr-0 box-border gap-[244px] min-w-[232px] z-[1] text-left text-mini text-white font-poppins mq1000:flex-1 mq1000:pt-[31px] mq1000:pb-8 mq1000:box-border mq450:pt-5 mq450:pb-[21px] mq450:box-border ${className}`}
    >
      <div className="w-[232px] h-[838px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[50px]">
        <div className="w-[181px] flex flex-row items-start justify-start py-0 px-1 box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-2.5">
            <div className="flex flex-row items-start justify-start py-0 px-[52px]">
              <img
                className="h-[51px] w-[51px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/personcircle2.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="self-stretch relative z-[2]">Administrator Name</b>
              <div className="w-40 relative text-3xs text-center inline-block whitespace-nowrap z-[2] mt-[-2px]">
                juan.delacruz@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[18.1px] text-3xs">
          <div className="self-stretch flex flex-col items-start justify-start gap-3 text-xs">
            <div className="w-[165px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
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
            </div>
            <button className="cursor-pointer [border:none] pt-[7px] px-[13px] pb-2 bg-whitesmoke-100 self-stretch shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs flex flex-row items-start justify-start gap-4 z-[2]">
              <div className="h-[35px] w-[203px] relative shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100 hidden" />
              <img
                className="h-5 w-5 relative min-h-[20px] z-[3]"
                alt=""
                src="/group-62.svg"
              />
              <div className="w-[104px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <b className="self-stretch relative text-3xs font-poppins text-midnightblue-100 text-left z-[3]">
                  Admin Profile
                </b>
              </div>
            </button>
            <div className="w-[166px] flex flex-row items-start justify-start py-0 px-[13px] box-border text-3xs">
              <div className="flex-1 flex flex-col items-start justify-start gap-7">
                <a href="/registration-page" className="self-stretch flex flex-row items-start justify-start gap-[19px]">
                  <img
                    className="h-[17px] w-[17px] relative overflow-hidden shrink-0 min-h-[17px] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/pencilsquare1.svg"
                  />
                  <a href="/registration-page" className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch relative z-[2]">
                      Registration
                    </div>
                  </a>
                </a>
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/journalcheck11.svg"
                  />
                  <a href="/plan-page" className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch relative z-[2]">Plan</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-[15px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
              <div className="flex flex-col items-end justify-start gap-[16.6px]">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/creditcard2back1.svg"
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
                    src="/people1.svg"
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                  <a href="/point-of-sale" className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                    <div className="flex-1 relative z-[2]">Payment</div>
                  </a>
                  <a href="/equipment-inventory" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                    <div className="flex-1 relative z-[2]">Inventory</div>
                  </a>
                  <a href="/view-members" className="self-stretch relative z-[2]">
                    View Members
                  </a>
                  <a href="/coaches" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                    <div className="flex-1 relative z-[2]">Coaches</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[169px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/book1.svg"
              />
              <a href="/sales-report" className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch relative z-[2]">Report</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 flex flex-row items-start justify-start py-0 px-2.5 box-border text-3xs">
        <div className="flex-1 flex flex-row items-start justify-start gap-4">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
            loading="lazy"
            alt=""
            src="/boxarrowright1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="self-stretch relative z-[2]">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
