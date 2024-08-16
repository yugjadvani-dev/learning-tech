import UnitedPivotTitle from "./UnitedPivotTitle";
const FrameComponent31= ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-aliceblue-300 flex flex-col items-start justify-start pt-[74px] px-0 pb-[43.4px] box-border gap-[78px] max-w-full z-[7] mt-[-2px] text-center text-25xl text-white font-poppins mq825:gap-[39px] mq1125:pb-7 mq1125:box-border mq450:gap-[19px] mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[844px] relative bg-aliceblue-300 hidden" />
      <div className="w-[708px] bg-darkslateblue-100 flex flex-row items-start justify-center pt-[30px] pb-3.5 pl-[35px] pr-5 box-border max-w-full z-[8]">
        <div className="h-[110px] w-[708px] relative bg-darkslateblue-100 hidden max-w-full" />
        <h1 className="m-0 w-[503px] relative text-inherit font-extrabold font-inherit inline-block shrink-0 max-w-full z-[9] mq825:text-16xl mq450:text-7xl">
          Our Other Services
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[54px] box-border max-w-full text-10xl text-darkslateblue-100 mq1400:pl-[27px] mq1400:pr-[27px] mq1400:box-border">
        <div className="w-[1278px] flex flex-row items-start justify-center gap-[114px] max-w-full mq825:gap-[57px] mq1125:flex-wrap mq450:gap-7">
          <div className="flex-1 flex flex-row items-start justify-between min-w-[391px] max-w-full gap-5 mq825:flex-wrap mq825:min-w-full">
            <div className="h-[538.6px] w-[172.5px] flex flex-col items-start justify-start pt-[142px] px-0 pb-0 box-border min-w-[172.5px] mq825:flex-1 mq825:pt-[74px] mq825:box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[9] mq825:self-stretch mq825:w-auto"
                loading="lazy"
                alt=""
                src="/b.svg"
              />
            </div>
            <div className="w-[274px] flex flex-col items-start justify-start gap-[68px] min-w-[274px] mq825:flex-1 mq450:gap-[34px]">
              <UnitedPivotTitle unitedHealthcare="United Healthcare" />
              <UnitedPivotTitle
                propAlignSelf="stretch"
                propFlex="unset"
                unitedHealthcare="Pivot Health"
                propAlignSelf1="stretch"
              />
            </div>
          </div>
          <div className="w-[562px] flex flex-col items-start justify-start gap-[68px] min-w-[562px] max-w-full mq825:gap-[34px] mq825:min-w-full mq1125:flex-1 mq450:gap-[17px]">
            <div className="w-[276px] flex flex-row items-start justify-start py-0 px-px box-border">
              <UnitedPivotTitle
                propAlignSelf="unset"
                propFlex="1"
                unitedHealthcare="IHA HEALTH"
                propAlignSelf1="stretch"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-8 mq825:gap-4">
              <h3 className="m-0 w-[274px] relative text-inherit font-extrabold font-inherit inline-block z-[8] mq450:text-4xl">
                National General
              </h3>
              <div className="self-stretch flex flex-row items-start justify-center gap-[78px] text-2xl text-white mq825:flex-wrap mq825:gap-[39px] mq450:gap-[19px]">
                <div className="h-[61px] flex-1 relative min-w-[178px]">
                  <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[8]" />
                  <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] whitespace-nowrap z-[9] mq450:text-mid mq450:leading-[27px]">
                    Learn More
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border min-w-[210px] mq825:flex-1">
                  <img
                    className="w-[210px] h-[210px] relative object-cover z-[9] mq825:self-stretch mq825:w-auto"
                    loading="lazy"
                    alt=""
                    src="/spiderplant-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent31;
