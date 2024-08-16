
const FrameComponent41= ({
  className = "",
}) => {
  return (
    <section
      className={`ml-[-146px] w-[1457px] flex flex-col items-start justify-start gap-[66px] max-w-[126%] shrink-0 text-center text-xl text-white font-poppins mq450:gap-4 mq750:gap-[33px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full">
        <div className="w-[1152px] flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-6 box-border max-w-full">
            <div className="w-[764px] bg-steelblue-600 flex flex-row items-start justify-center pt-[35px] px-5 pb-[41px] box-border max-w-full z-[1]">
              <div className="h-[157px] w-[764px] relative bg-steelblue-600 hidden max-w-full" />
              <b className="h-[81px] w-[372px] relative leading-[25px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[20px]">
                <p className="m-0">16501 Northcross Drive, Ste D,</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Huntersville, NC 28078</p>
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] text-darkslategray-400">
            <div className="flex-1 relative leading-[25px] font-medium inline-block min-w-[366px] max-w-full z-[2] mq450:text-base mq450:leading-[20px] mq750:min-w-full">
              © 2021 Health Care All Year, All rights reserved
            </div>
            <div className="w-[78px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border ml-[-78px] text-2xs mq450:ml-0">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="h-[38px] flex flex-row items-start justify-start py-0 pl-[18px] pr-[21px] box-border">
                  <img
                    className="h-[39px] w-[39px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
                <b className="self-stretch relative leading-[26px] shrink-0 z-[1]">
                  Back to Top
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[58px] px-[546px] box-border relative bg-[url('/public/rectangle-521@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-2xl lg:pl-[273px] lg:pr-[273px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[136px] mq750:pr-[136px] mq750:box-border">
        <img
          className="h-[177px] w-[1452px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/rectangle-521@2x.png"
        />
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] bg-darkslategray-700 z-[1]" />
        <div className="h-[61px] w-[274px] relative">
          <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[2]" />
          <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] z-[3] mq450:text-mid mq450:leading-[27px]">
            Request a Quote
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent41;
