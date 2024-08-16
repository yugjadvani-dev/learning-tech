import { useCallback } from "react";
const FrameComponent12 = ({
  className = "",
}) => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[47px] pb-[29px] pl-[29px] pr-0 box-border gap-[50px] min-w-[226px] z-[1] text-left text-3xs text-white font-poppins mq1000:flex-1 mq1000:pt-[31px] mq1000:pb-5 mq1000:box-border mq450:pt-5 mq450:box-border ${className}`}
    >
      <div className="w-[226px] h-[817px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden" />
      <div className="w-[168px] flex flex-row items-start justify-start py-0 px-1 box-border text-mini">
        <div className="flex-1 flex flex-col items-start justify-start gap-[31px]">
          <div className="flex flex-row items-start justify-start py-0 pl-[52px] pr-[57px]">
            <img
              className="h-[51px] w-[51px] relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/personcircle1.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <b className="w-[173px] absolute !m-[0] top-[-21px] right-[-13px] inline-block z-[2]">
              Administrator Name
            </b>
            <div className="flex-1 relative text-3xs text-center whitespace-nowrap z-[3]">
              juan.delacruz@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[204px] gap-2.5 mq725:pb-[133px] mq725:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-[9px] text-xs">
          <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
            <div className="flex flex-col items-start justify-start gap-[18px]">
              <img
                className="w-5 h-5 relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[17px]">
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                  <img
                    className="h-5 w-5 relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-61.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
                  <img
                    className="h-[17px] w-[17px] relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/pencilsquare1.svg"
                  />
                </div>
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/journalcheck11.svg"
                />
                <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                  <div className="h-[53.9px] w-5 relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden z-[2]"
                      loading="lazy"
                      alt=""
                      src="/creditcard2back1.svg"
                    />
                    <img
                      className="absolute top-[33.9px] left-[0px] w-5 h-5 overflow-hidden z-[2]"
                      loading="lazy"
                      alt=""
                      src="/materialsymbolsinventory2outline.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/people1.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
              <a href="/admin-dashboard-page" className="[text-decoration:none] w-[104px] relative text-[inherit] inline-block z-[2]">
                Dashboard
              </a>
              <div className="self-stretch flex flex-col items-start justify-start gap-[21.8px] text-3xs">
                <a href="/admin-profile-page" className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 relative z-[2]">Admiin Profile</div>
                </a>
                <a href="/registration-page" className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 relative z-[2]">Registration</div>
                </a>
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
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start pt-[7px] pb-1 pl-[13px] pr-[9px] relative gap-3 cursor-pointer z-[2] text-midnightblue-100"
          onClick={onGroupContainerClick}
        >
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100" />
          <img
            className="h-6 w-6 relative z-[3]"
            loading="lazy"
            alt=""
            src="/group-601.svg"
          />
          <a href="/coaches" className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <b className="self-stretch relative z-[3]">Coaches</b>
          </a>
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

export default FrameComponent12;
