
const FrameComponent1= ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1310px] flex flex-row flex-wrap items-start justify-start pt-0 pb-[534px] pl-5 pr-0 box-border gap-[149px] max-w-full text-center text-mid text-darkslateblue-100 font-poppins mq450:gap-[19px] mq450:pb-[226px] mq450:box-border mq750:gap-[37px] mq1100:pb-[347px] mq1100:box-border mq1250:gap-[74px] ${className}`}
    >
      <img
        className="h-[74.1px] w-44 relative object-cover shrink-0"
        loading="lazy"
        alt=""
        src="/main-logo@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border min-w-[627px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[79px] shrink-0 max-w-full mq750:gap-5 mq1100:flex-wrap mq1100:gap-[39px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border min-w-[305px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-1">
              <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-5 text-center text-mid text-steelblue-400 font-poppins mq450:hidden">
                <b className="flex-1 relative leading-[16px] whitespace-nowrap">
                  Life and Health Products
                </b>
                <div className="w-[78px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <a href="/about" className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap">{`About `}</a>
                </div>
                <a href="/contact-us" className="[text-decoration:none] w-[78px] relative leading-[16px] font-bold text-[inherit] inline-block shrink-0 min-w-[78px]">
                  Contact
                </a>
              </nav>
              <div className="w-72 flex flex-row items-start justify-start py-0 px-2 box-border">
                <div className="flex-1 bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid flex flex-col items-start justify-start pt-6 px-0 pb-[29px] gap-[18px] z-[2]">
                  <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
                  <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[3]">
                    Marketplace Plans
                  </a>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                    <a href="/off-marketplace" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
                      Off-Market Plans
                    </a>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                      <a href="/medicare-health-plans" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
                        Medicare Plans
                      </a>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                        <a href="/life-insurance" className="flex-1 relative leading-[16px] z-[3]">
                          Life Insurance
                        </a>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                        <a href="/burial-insurance-plans" className="self-stretch relative leading-[16px] z-[3]">
                          Burial Insurance
                        </a>
                        <a href="/vision-and-dental" className="self-stretch relative leading-[16px] z-[3]">
                          Dental and Vision
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[416.4px] flex flex-col items-start justify-start gap-[71px] min-w-[416.4px] max-w-full text-5xl text-white font-mont mq450:gap-[35px] mq750:min-w-full mq1100:flex-1">
            <div className="w-[372px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <button className="cursor-pointer [border:none] pt-[23px] pb-[21px] pl-[23px] pr-[11px] bg-crimson w-44 rounded-16xl flex flex-row items-start justify-start box-border">
                <div className="h-[61px] w-44 relative rounded-16xl bg-crimson hidden z-[1]" />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/whitephone.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-5px]">
                  <a className="[text-decoration:none] self-stretch relative text-mini leading-[16px] font-semibold font-poppins text-white text-center z-[1]">
                    704-595-7729
                  </a>
                </div>
              </button>
            </div>
            <div className="self-stretch bg-steelblue-700 flex flex-row items-start justify-start pt-[29px] px-0 pb-[26.6px] box-border whitespace-nowrap max-w-full z-[1]">
              <div className="h-[94px] w-[416.4px] relative bg-steelblue-700 hidden max-w-full" />
              <div className="h-[38.4px] flex-1 relative font-extrabold inline-block max-w-full z-[1]">
                Affordable Health Care
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
