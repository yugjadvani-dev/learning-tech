import { Link } from "react-router-dom";

const Content= ({ className = "" }) => {
  return (
    <section
      className={`w-[1310px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border gap-[146px] max-w-full text-center text-mid text-darkslateblue-100 font-poppins mq450:gap-[18px] mq750:gap-9 mq1275:flex-wrap mq1275:gap-[73px] ${className}`}
    >
      <div className="w-[795px] flex flex-col items-start justify-start gap-[43px] min-w-[795px] shrink-0 max-w-full mq450:gap-[21px] mq1100:min-w-full mq1275:flex-1">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
          <img
            className="h-[74.1px] w-44 relative object-cover"
            loading="lazy"
            alt=""
            src="/main-logo@2x.png"
          />
          <div className="w-[470px] flex flex-col items-start justify-start pt-[40.1px] px-0 pb-0 box-border min-w-[470px] max-w-full mq750:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-1">
              <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-5 text-center text-mid text-steelblue-400 font-poppins mq450:hidden">
                <b className="flex-1 relative leading-[16px] whitespace-nowrap">
                  {" "}
                  Marketplace Health plans
                </b>
                <div className="w-[78px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <Link to="/about" className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap">{`About `}</Link>
                </div>
                <a href="/contact-us" className="[text-decoration:none] w-[78px] relative leading-[16px] font-bold text-[inherit] inline-block shrink-0 min-w-[78px]">
                  Contact
                </a>
              </nav>
              <div className="w-72 flex flex-row items-start justify-start py-0 px-2 box-border">
                <div className="flex-1 flex flex-row items-start justify-start relative">
                  <img
                    className="h-[372px] w-[753px] absolute !m-[0] right-[-342px] bottom-[-230px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/medicalstethoscopewithpapercutfamily-15@2x.png"
                  />
                  <div className="flex-1 bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid flex flex-col items-start justify-start pt-6 px-0 pb-[29px] gap-[18px] z-[1]">
                    <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
                    <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[2]">
                      Marketplace Plans
                    </a>
                    <a href="/off-marketplace" className="self-stretch relative leading-[16px] z-[2]">
                      Off-Market Plans
                    </a>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                      <a href="/medicare-health-plans" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[2]">
                        Medicare Plans
                      </a>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                        <a href="/life-insurance" className="flex-1 relative leading-[16px] z-[2]">
                          Life Insurance
                        </a>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                        <a href="/burial-insurance-plans" className="self-stretch relative leading-[16px] z-[2]">
                          Burial Insurance
                        </a>
                        <a href="/vision-and-dental" className="self-stretch relative leading-[16px] z-[2]">
                          Dental and Vision
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[447px] flex flex-row items-start justify-start py-0 px-9 box-border max-w-full text-left text-25xl text-white">
          <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit font-extrabold font-inherit inline-block [text-shadow:3px_0_0_#000,_0_3px_0_#000,_-3px_0_0_#000,_0_-3px_0_#000] max-w-full z-[2] mq450:text-7xl mq750:text-16xl">
                Contact Us
              </h1>
            </div>
            <div className="w-[360px] h-[21px] relative bg-white border-black border-[3px] border-solid box-border max-w-full z-[2]" />
          </div>
        </div>
      </div>
      <div className="h-[544.1px] w-[372px] flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border min-w-[372px] max-w-full shrink-0 mq450:min-w-full mq1275:flex-1">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[104px] shrink-0 mq450:gap-[52px]">
          <div className="w-[238px] flex flex-row items-start justify-start py-0 px-[31px] box-border">
            <button className="cursor-pointer [border:none] pt-[23px] pb-[21px] pl-[23px] pr-[11px] bg-crimson flex-1 rounded-16xl flex flex-row items-start justify-start">
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
          <div className="self-stretch flex-1 relative bg-powderblue-100 z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default Content;
