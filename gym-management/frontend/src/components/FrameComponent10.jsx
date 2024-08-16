import { useCallback } from "react";
const FrameComponent10 = ({
  className = "",
}) => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='inventoryBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[47px] pb-[29px] pl-[29px] pr-0 box-border gap-[50px] min-w-[226px] z-[1] text-left text-3xs text-white font-poppins mq1000:flex-1 mq1000:pt-[31px] mq1000:pb-5 mq1000:box-border mq450:pt-5 mq450:box-border ${className}`}
    >
      <div className="w-[226px] h-[817px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden" />
      <div className="w-[181px] flex flex-row items-start justify-start py-0 px-1 box-border text-mini">
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
            <b className="self-stretch relative z-[2]">Administrator Name</b>
            <div className="w-40 relative text-3xs text-center inline-block whitespace-nowrap z-[2] mt-[-2px]">
              juan.delacruz@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[201px] gap-[7.9px] mq725:pb-[131px] mq725:box-border">
        <div className="w-[166px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
            <div className="flex flex-col items-start justify-start gap-[19.3px]">
              <img
                className="w-5 h-5 relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
              <img
                className="w-5 h-5 relative z-[2]"
                loading="lazy"
                alt=""
                src="/group-61.svg"
              />
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/pencilsquare1.svg"
              />
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/journalcheck11.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/creditcard2back1.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
              <a href="/admin-dashboard-page" className="[text-decoration:none] self-stretch relative text-xs text-[inherit] z-[2]">
                Dashboard
              </a>
              <a href="/admin-profile-page" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="flex-1 relative z-[2]">Admiin Profile</div>
              </a>
              <a href="/registration-page" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="flex-1 relative z-[2]">Registration</div>
              </a>
              <a href="/plan-page" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="flex-1 relative z-[2]">Plan</div>
              </a>
              <a href="/point-of-sale" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="flex-1 relative z-[2]">Payment</div>
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[11px] text-midnightblue-100">
          <div
            className="self-stretch flex flex-row items-start justify-start pt-2 pb-[7px] pl-[15px] pr-[9px] relative gap-3.5 cursor-pointer z-[2]"
            onClick={onGroupContainerClick}
          >
            <div
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100"
              data-scroll-to="inventoryBackground"
            />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[3]"
              loading="lazy"
              alt=""
              src="/materialsymbolsinventory2outline1.svg"
            />
            <a href="/equipment-inventory" className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <b className="self-stretch relative z-[3]">Inventory</b>
            </a>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-[7px] text-white">
            <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
              <div className="flex flex-col items-end justify-start gap-[17.5px]">
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
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/book1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[21.5px]">
                  <a href="/view-members" className="self-stretch relative z-[2]">
                    View Members
                  </a>
                  <a href="/coaches" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                    <div className="flex-1 relative z-[2]">Coaches</div>
                  </a>
                  <a href="/sales-report" className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                    <div className="flex-1 relative z-[2]">Report</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 flex flex-row items-start justify-start py-0 px-2.5 box-border">
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

export default FrameComponent10;
