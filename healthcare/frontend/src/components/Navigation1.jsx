
const Navigation1= ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[46.9px] left-[0px] w-[1298px] flex flex-row flex-wrap items-start justify-start gap-[13px] max-w-full text-center text-mid text-steelblue-400 font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[60px] min-w-[491px] max-w-full mq750:min-w-full">
        <div className="w-[607px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap mq1100:flex-1">
            <img
              className="h-[74.1px] w-44 relative object-cover"
              loading="lazy"
              alt=""
              src="/main-logo@2x.png"
            />
            <div className="w-[280px] flex flex-col items-start justify-start pt-[40.1px] px-0 pb-0 box-border min-w-[280px] mq750:flex-1">
              <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1.5">
                  <b className="flex-1 relative leading-[16px]">
                    {" "}
                    Marketplace Health plans
                  </b>
                </div>
                <div className="w-[272px] bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border flex flex-col items-start justify-start pt-6 px-0 pb-[29px] gap-[18.4px] z-[1] text-darkslateblue-100">
                  <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
                  <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[2]">
                    Marketplace Plans
                  </a>
                  <a href="/off-marketplace" className="self-stretch relative leading-[16px] z-[2]">
                    Off-Market Plans
                  </a>
                  <a href="/medicare-health-plans" className="self-stretch relative leading-[16px] z-[2]">
                    Medicare Plans
                  </a>
                  <a href="/life-insurance" className="self-stretch relative leading-[16px] z-[2]">
                    Life Insurance
                  </a>
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
        <div className="self-stretch [background:linear-gradient(-6.65deg,_rgba(156,_156,_156,_0.7),_rgba(244,_244,_244,_0.7)_58.85%)] flex flex-col items-start justify-start pt-[83px] pb-8 pl-[145px] pr-3.5 box-border gap-[33px] max-w-full z-[2] text-left text-20xl text-darkslateblue-200">
          <div className="w-[756px] h-[338px] relative [background:linear-gradient(-6.65deg,_rgba(156,_156,_156,_0.7),_rgba(244,_244,_244,_0.7)_58.85%)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-3 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-extrabold font-inherit inline-block max-w-full z-[3] mq750:text-12xl mq450:text-4xl">{`We Have the Best Dental and Vision Insurance `}</h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full text-19xl">
            <img
              className="w-[437px] relative max-h-full max-w-full z-[3]"
              loading="lazy"
              alt=""
              src="/vector-151.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-0 box-border max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] mq750:text-11xl mq450:text-4xl">
                Just For You!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[529px] flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-end justify-between gap-5 mq450:flex-wrap">
          <div className="w-44 flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-5">
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <a href="/about" className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit]">{`About `}</a>
              </div>
              <a href="/contact-us" className="[text-decoration:none] flex-1 relative leading-[16px] font-bold text-[inherit] inline-block min-w-[78px]">
                Contact
              </a>
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default Navigation1;
