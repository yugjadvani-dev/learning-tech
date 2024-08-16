
const Articles= ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[230px] pl-[26px] pr-5 box-border max-w-full text-center text-xl text-white font-poppins mq750:pb-[149px] mq750:box-border ${className}`}
    >
      <div className="w-[1156px] flex flex-row flex-wrap items-start justify-start gap-5 max-w-full">
        <div className="flex-1 bg-aliceblue-300 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[25px] min-w-[369px] max-w-full z-[3] mq450:min-w-full">
          <div className="self-stretch h-[359px] relative bg-lightgray hidden" />
          <div className="self-stretch h-[97px] relative bg-darkslategray-400 hidden" />
          <img
            className="w-[366px] relative max-h-full object-cover hidden max-w-full"
            alt=""
            src="/image-36@2x.png"
          />
          <b className="w-[372px] relative hidden max-w-full mq450:text-base">
            I Have Healthcare Now What?
          </b>
          <div className="self-stretch h-[359px] relative bg-aliceblue-300 hidden" />
          <div className="self-stretch bg-darkslateblue-100 flex flex-row items-start justify-center pt-[19px] pb-2.5 pl-8 pr-5 box-border max-w-full z-[4] text-lgi">
            <div className="h-[97px] w-[568px] relative bg-darkslateblue-100 hidden max-w-full" />
            <b className="w-[372px] relative leading-[34px] inline-block shrink-0 max-w-full z-[5]">
              Interview With Chalmes Tarry of Health Care All Year
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[26px] box-border max-w-full">
            <img
              className="w-[372px] relative max-h-full object-cover max-w-full z-[4]"
              loading="lazy"
              alt=""
              src="/image-54@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[369px] max-w-full text-lgi mq450:min-w-full">
          <div className="self-stretch bg-darkslateblue-100 flex flex-row items-start justify-center pt-[19px] px-5 pb-5 box-border max-w-full z-[1]">
            <div className="h-[97px] w-[568px] relative bg-darkslateblue-100 hidden max-w-full" />
            <b className="w-[372px] relative inline-block shrink-0 max-w-full z-[2]">
              See Where We Rank on Healthcare.gov With Local Agent Help
            </b>
          </div>
          <div className="self-stretch bg-aliceblue-300 flex flex-row items-start justify-center pt-[133px] px-5 pb-[41px] box-border max-w-full mt-[-94px] mq450:pb-[27px] mq450:box-border">
            <div className="h-[359px] w-[568px] relative bg-aliceblue-300 hidden max-w-full" />
            <img
              className="w-[377px] relative max-h-full object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/image-55@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
