import { useCallback } from "react";
const FrameComponent7 = ({
  className = "",
}) => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='planIconBg']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[47px] pb-[29px] pl-[29px] pr-0 box-border gap-[50px] min-w-[226px] z-[2] text-left text-3xs text-white font-poppins mq1000:flex-1 mq1000:pt-[31px] mq1000:pb-5 mq1000:box-border mq450:pt-5 mq450:box-border ${className}`}
    >
      <div className="w-[226px] h-[817px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden" />
      <div className="w-[181px] flex flex-row items-start justify-start py-0 px-1 box-border text-mini">
        <div className="flex-1 flex flex-col items-start justify-start gap-2.5">
          <div className="flex flex-row items-start justify-start py-0 px-[52px]">
            <img
              className="h-[51px] w-[51px] relative overflow-hidden shrink-0 z-[3]"
              loading="lazy"
              alt=""
              src="/personcircle1.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative z-[3]">Administrator Name</b>
            <div className="w-40 relative text-3xs text-center inline-block whitespace-nowrap z-[3] mt-[-2px]">
              juan.delacruz@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[199px] gap-3 mq725:pb-[129px] mq725:box-border">
        <div className="w-[166px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
            <div className="flex flex-col items-start justify-start gap-[19.5px]">
              <img
                className="w-5 h-5 relative z-[3]"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
              <img
                className="w-5 h-5 relative z-[3]"
                loading="lazy"
                alt=""
                src="/group-61.svg"
              />
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0 z-[3]"
                loading="lazy"
                alt=""
                src="/pencilsquare1.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[23.5px]">
              <a href="/admin-dashboard-page" className="[text-decoration:none] self-stretch relative text-xs text-[inherit] z-[3]">
                Dashboard
              </a>
              <a href="/admin-profile-page" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="flex-1 relative z-[3]">Admin Profile</div>
              </a>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <a href="/registration-page" className="flex-1 relative z-[3]">Registration</a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[18px] text-midnightblue-100">
          <div className="self-stretch flex flex-col items-end justify-start gap-[11.1px]">
            <div
              className="self-stretch flex flex-row items-start justify-start pt-2 px-[13px] pb-[7px] relative gap-4 cursor-pointer z-[3]"
              onClick={onGroupContainerClick}
            >
              <div
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100"
                data-scroll-to="planIconBg"
              />
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[4]"
                alt=""
                src="/journalcheck.svg"
              />
              <a href="/plan-page" className="w-[104px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <b className="self-stretch relative z-[4]">Plan</b>
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[9px] text-white">
              <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
                <div className="flex flex-col items-end justify-start gap-[17.6px]">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0 z-[3]"
                    loading="lazy"
                    alt=""
                    src="/creditcard2back1.svg"
                  />
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0 z-[3]"
                    loading="lazy"
                    alt=""
                    src="/materialsymbolsinventory2outline.svg"
                  />
                  <div className="flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                      loading="lazy"
                      alt=""
                      src="/people1.svg"
                    />
                  </div>
                  <img
                    className="w-5 h-5 relative z-[3]"
                    loading="lazy"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
                    <a href="/point-of-sale" className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                      <div className="flex-1 relative z-[3]">Payment</div>
                    </a>
                    <a href="/equipment-inventory" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                      <div className="flex-1 relative z-[3]">Inventory</div>
                    </a>
                    <a href="/view-members" className="self-stretch relative z-[3]">
                      View Members
                    </a>
                    <a href="/coaches" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                      <div className="flex-1 relative z-[3]">Coaches</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[169px] flex flex-row items-start justify-start py-0 px-[15px] box-border text-white">
            <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain z-[3]"
                loading="lazy"
                alt=""
                src="/book1.svg"
              />
              <a href="/sales-report" className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch relative z-[3]">Report</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 flex flex-row items-start justify-start py-0 px-2.5 box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-4">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[3]"
            loading="lazy"
            alt=""
            src="/boxarrowright1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="self-stretch relative z-[3]">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
