
const Desktop1= ({ className = "" }) => {
  return (
    <section
      className={`w-[1310px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border relative max-w-full text-left text-25xl text-white font-poppins ${className}`}
    >
      <div className="h-[570px] w-[166px] absolute !m-[0] right-[-24px] bottom-[-203px] [background:linear-gradient(0deg,_#9fa38f_10.07%,_#cbc6b2)] z-[1]" />
      <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[193px] box-border max-w-full mq750:pb-[125px] mq750:box-border">
        <div className="w-[1168px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border relative max-w-full">
          <div className="h-[570px] w-[166px] absolute !m-[0] bottom-[-396px] left-[-161px] [background:linear-gradient(0deg,_#d3cdc0,_#e3e3db_51.56%)] z-[2]" />
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
            <img
              className="h-[74.1px] w-44 relative object-cover"
              loading="lazy"
              alt=""
              src="/main-logo@2x.png"
            />
            <div className="w-[498px] flex flex-col items-start justify-start pt-[40.1px] pb-0 pl-0 pr-7 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-5 text-center text-mid text-steelblue-400 font-poppins mq450:hidden">
                  <b className="flex-1 relative leading-[16px] whitespace-nowrap">
                    {" "}
                    Marketplace Health plans
                  </b>
                  <div className="w-[78px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <a href="/about" className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap">{`About `}</a>
                  </div>
                  <a href="/contact-us" className="[text-decoration:none] w-[78px] relative leading-[16px] font-bold text-[inherit] inline-block shrink-0 min-w-[78px]">
                    Contact
                  </a>
                </nav>
                <div className="w-72 flex flex-row items-start justify-start py-0 px-2 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start relative">
                    <div className="w-[1155px] !m-[0] absolute right-[-543px] bottom-[-396px] flex flex-col items-start justify-start pt-[17px] px-[226px] pb-[404px] box-border gap-1 bg-[url('/public/medicalstethoscopewithpapercutfamily-13@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                      <img
                        className="w-[1155px] h-[570px] relative object-cover hidden max-w-full"
                        alt=""
                        src="/medicalstethoscopewithpapercutfamily-13@2x.png"
                      />
                      <h1 className="m-0 w-[335px] relative text-inherit font-extrabold font-inherit inline-block max-w-full z-[1] mq750:text-16xl mq450:text-7xl">
                        Medicare Health Plans
                      </h1>
                      <img
                        className="w-[429px] relative max-h-full max-w-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-16.svg"
                      />
                    </div>
                    <div className="flex-1 bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid flex flex-col items-start justify-start pt-6 px-0 pb-[29px] gap-[18px] z-[2] text-center text-mid text-darkslateblue-100">
                      <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
                      <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[3]">
                        Marketplace Plans
                      </a>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                        <a href="/off-marketplace" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
                          Off-Market Plans
                        </a>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[18.7px]">
                          <a href="/medicare-health-plans" className="self-stretch relative leading-[16px] z-[3]">
                            Medicare Plans
                          </a>
                          <a href="/life-insurance" className="self-stretch relative leading-[16px] z-[3]">
                            Life Insurance
                          </a>
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
            <div className="w-44 flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border">
              <button className="cursor-pointer [border:none] pt-[23px] pb-[21px] pl-[23px] pr-[11px] bg-crimson self-stretch rounded-16xl flex flex-row items-start justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default Desktop1;
