
const VisionPlan= ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-7 box-border max-w-full text-left text-3xl text-white font-poppins ${className}`}
    >
      <div className="w-[1147.7px] flex flex-row items-start justify-start gap-[19px] max-w-full mq1100:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[421px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-14 pb-[68px] pl-[78px] pr-0 relative gap-12 mq750:gap-6 mq750:pl-[39px] mq750:box-border">
            <div className="w-[470px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] [background:linear-gradient(235.89deg,_#263238_47.4%,_#111619_76.56%,_#000)] z-[4]" />
            <b className="self-stretch relative leading-[33px] z-[5] mq450:text-lg mq450:leading-[26px]">
              <ul className="m-0 font-inherit text-inherit pl-[29px]">
                <li className="mb-[26px]">Eye Exam</li>
                <li className="mb-[26px]">Contact Lenses</li>
                <li className="mb-[26px]">Frames</li>
                <li>{`Individual & Family Plans`}</li>
              </ul>
            </b>
            <div className="w-[214px] rounded-16xl bg-crimson flex flex-row items-start justify-start pt-3.5 px-0 pb-3 box-border whitespace-nowrap z-[5] text-center text-2xl">
              <div className="h-[61px] w-[211.6px] relative rounded-16xl bg-crimson hidden" />
              <div className="flex-1 relative leading-[35px] font-medium z-[1]">
                Vision Plan
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[481.7px] relative max-h-full overflow-hidden shrink-0 max-w-full z-[4] mq1100:flex-1"
          loading="lazy"
          alt=""
          src="/asset-1-4.svg"
        />
      </div>
    </div>
  );
};

export default VisionPlan;
