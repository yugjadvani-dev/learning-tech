
const UserIconContainer = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[47px] pb-[29px] pl-[29px] pr-0 box-border relative gap-[50px] min-w-[226px] z-[1] text-left text-mini text-white font-poppins mq450:pt-5 mq450:box-border mq1000:flex-1 mq1000:pt-[31px] mq1000:pb-5 mq1000:box-border ${className}`}
    >
      <div className="w-[226px] h-[817px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden z-[0]" />
      <div className="w-[181px] flex flex-row items-start justify-start py-0 px-1 box-border">
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
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[187px] gap-[11px] text-xs mq725:pb-[122px] mq725:box-border">
        <div className="w-[166px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
            <div className="flex flex-col items-start justify-start gap-7">
              <div className="flex flex-col items-start justify-start gap-[21px]">
                <div className="w-5 h-[58px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-5 h-5 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[0px] w-5 h-5 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-61.svg"
                  />
                </div>
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0 z-[2]"
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
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
              <a href="/admin-dashboard-page" className="[text-decoration:none] self-stretch relative text-[inherit] z-[2]">
                Dashboard
              </a>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-3xs">
                <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                    <a href="/admin-profile-page" className="self-stretch relative z-[2]">
                      Admiin Profile
                    </a>
                    <a href="/registration-page" className="self-stretch relative z-[2]">
                      Registration
                    </a>
                  </div>
                  <a href="/plan-page" className="self-stretch relative z-[2]">Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[15px] text-3xs">
          <button className="cursor-pointer [border:none] pt-[7.1px] px-[15px] pb-[7.9px] bg-whitesmoke-100 self-stretch shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs flex flex-row items-start justify-start gap-3.5 z-[2]">
            <div className="h-[35px] w-[197px] relative shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100 hidden" />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[3]"
              alt=""
              src="/creditcard2back3.svg"
            />
            <a href="/point-of-sale" className="w-[104px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <b className="self-stretch relative text-3xs font-poppins text-midnightblue-100 text-left z-[3]">
                Payment
              </b>
            </a>
          </button>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
              <div className="flex flex-col items-end justify-start gap-[17.3px]">
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
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/book1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[21.7px]">
                  <a href="/equipment-inventory" className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                    <div className="flex-1 relative z-[2]">Inventory</div>
                  </a>
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
      <div className="flex flex-row items-start justify-start py-0 px-2.5 text-3xs">
        <div className="flex flex-row items-start justify-start gap-[14.8px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
            loading="lazy"
            alt=""
            src="/boxarrowright1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative inline-block min-w-[34px] shrink-0 z-[2]">
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className="w-[930px] !m-[0] absolute top-[-42px] right-[-638px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-end pt-[71px] px-[46px] pb-[552px] box-border gap-[68px] text-midnightblue-100">
        <div className="h-[819px] w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full z-[0]" />
        <h3 className="!m-[0] h-0 w-[242px] absolute top-[197px] right-[342px] text-inherit font-normal font-inherit text-gray-200 inline-block z-[2]">{` `}</h3>
        <div className="w-[415px] flex flex-col items-start justify-start gap-16 max-w-full text-xl font-monument-extended">
          <div className="flex flex-row items-start justify-start py-0 px-20">
            <div className="flex flex-row items-start justify-start relative">
              <a className="[text-decoration:none] relative text-[inherit] z-[1] mq450:text-base">
                <p className="m-0">STAMINA</p>
                <p className="m-0">FITNESS</p>
              </a>
              <img
                className="h-[111px] w-[78px] absolute !m-[0] bottom-[-34px] left-[-76px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-13xl text-goldenrod font-poppins">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.05em] leading-[42px] font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[25px] mq1000:text-7xl mq1000:leading-[34px]">
              Point of Sale
            </h1>
            <h1 className="m-0 self-stretch h-[42px] relative text-21xl tracking-[0.05em] font-normal font-monument-extended text-midnightblue-100 inline-block shrink-0 z-[1] mq450:text-5xl mq1000:text-13xl">
              Add Payment
            </h1>
          </div>
        </div>
        <div className="w-[86px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border text-center text-sm">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[1]">
            Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserIconContainer;
