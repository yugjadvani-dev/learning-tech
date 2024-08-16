
const GroupComponent = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[108.3px] pb-[23px] pl-[29px] pr-0 box-border relative gap-[34.1px] min-w-[226px] z-[2] text-left text-mini text-white font-poppins mq450:pt-[45px] mq450:box-border mq1000:flex-1 mq1000:pt-[70px] mq1000:pb-5 mq1000:box-border ${className}`}
    >
      <div className="w-[226px] h-[819px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden z-[0]" />
      <img
        className="w-[51px] h-[51.1px] absolute !m-[0] top-[47.1px] left-[85px] overflow-hidden shrink-0 z-[1]"
        loading="lazy"
        alt=""
        src="/personcircle.svg"
      />
      <div className="w-[181px] flex flex-row items-start justify-start py-0 px-1 box-border">
        <div className="flex-1 flex flex-col items-start justify-start">
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1]">
            Administrator Name
          </h3>
          <div className="w-40 h-[23.1px] relative text-3xs text-center inline-block shrink-0 whitespace-nowrap z-[1] mt-[-2.1px]">
            juan.delacruz@gmail.com
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[220.8px] gap-2 text-xs text-midnightblue-100 mq725:pb-36 mq725:box-border">
        <a href="/admin-dashboard-page" className="self-stretch shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-2 px-[13px] pb-[7.1px] gap-[15px] z-[1]">
          <div className="h-[35.1px] w-[197px] relative shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100 hidden" />
          <img
            className="h-5 w-5 relative min-h-[20px] z-[2]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <a href="/admin-dashboard-page" className="w-[104px] relative inline-block shrink-0 z-[2]">
            Dashboard
          </a>
        </a>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-[9px] text-3xs text-white">
          <div className="flex-1 flex flex-row items-end justify-start gap-[13px]">
            <div className="flex flex-col items-start justify-start gap-[17.9px]">
              <img
                className="w-5 h-5 relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-6.svg"
              />
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/pencilsquare.svg"
              />
              <input
                className="m-0 w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                type="checkbox"
              />
              <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/creditcard2back.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsinventory2outline.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0.5">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                  loading="lazy"
                  alt=""
                  src="/people.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                <img
                  className="h-5 w-5 relative z-[3]"
                  loading="lazy"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain z-[3]"
                  loading="lazy"
                  alt=""
                  src="/book.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19.1px]">
                <a href="/admin-profile-page" className="w-[104px] relative inline-block z-[1]">
                  Admin Profile
                </a>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24.1px]">
                  <a href="/registration-page" className="w-[104px] relative inline-block z-[1]">
                    Registration
                  </a>
                  <a href="/plan-page" className="w-[104px] relative inline-block z-[1]">
                    Plan
                  </a>
                  <a href="/point-of-sale" className="w-[104px] relative inline-block z-[1]">
                    Payment
                  </a>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[21.7px]">
                    <a href="/equipment-inventory" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                      <div className="flex-1 relative z-[3]">Inventory</div>
                    </a>
                    <a href="/view-members" className="self-stretch relative z-[3]">
                      View Members
                    </a>
                    <a href="/coaches" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                      <div className="flex-1 relative z-[3]">Coaches</div>
                    </a>
                    <a href="/sales-report" className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                      <div className="flex-1 relative z-[3]">Report</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 flex flex-row items-start justify-start py-0 px-2.5 box-border text-3xs">
        <div className="flex-1 flex flex-row items-start justify-start gap-4">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/boxarrowright.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="self-stretch h-[23.1px] relative inline-block shrink-0 z-[1]">
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
