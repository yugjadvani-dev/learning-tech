
const HelpTopic = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-darkslateblue-100 flex flex-row items-end justify-center pt-[73px] px-5 pb-[72px] box-border gap-5 max-w-full text-left text-xl text-darkslateblue-100 font-poppins mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq1275:flex-wrap ${className}`}
    >
      <div className="h-[622px] w-[1448px] relative bg-darkslateblue-100 hidden max-w-full" />
      <img
        className="w-[666px] relative max-h-full object-cover max-w-full z-[1] mq1275:flex-1"
        alt=""
        src="/image-58@2x.png"
      />
      <div className="w-[470px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border min-w-[470px] max-w-full mq750:min-w-full mq1275:flex-1">
        <div className="self-stretch bg-azure flex flex-col items-end justify-start pt-[51px] pb-[65px] pl-[69px] pr-[78px] box-border gap-[34px] max-w-full z-[1] mq450:pt-[33px] mq450:pb-[42px] mq450:box-border mq750:gap-[17px] mq750:pl-[34px] mq750:pr-[39px] mq750:box-border">
          <div className="w-[470px] h-[418px] relative bg-azure hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[29px] pr-[25px]">
            <img
              className="h-[127px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/main-logo-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
            <img
              className="h-[35px] w-7 relative z-[1]"
              loading="lazy"
              alt=""
              src="/shape-5.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[182px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[34px] mq450:gap-[17px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0">
                  <b className="flex-1 relative leading-[30px] z-[1] mq450:text-base mq450:leading-[24px]">
                    <p className="m-0">16501 Northcross Dr, Ste D</p>
                    <p className="m-0">{`
Huntersville, NC 28078
 `}</p>
                  </b>
                </div>
                <div className="w-[207px] flex flex-row items-start justify-start gap-5 text-center text-2xl">
                  <img
                    className="h-[31px] w-[31px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-12.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <b className="self-stretch h-[43px] relative leading-[34px] inline-block shrink-0 z-[1] mq450:text-mid mq450:leading-[27px]">
                      704-595-7729
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpTopic;
