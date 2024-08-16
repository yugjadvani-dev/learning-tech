
const FooterContent1= ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1156px] rounded-4xs bg-lavender border-lightsteelblue-200 border-[20px] border-solid box-border flex flex-row items-end justify-start pt-2 pb-5 pl-[98px] pr-[123px] gap-[97px] max-w-full z-[1] text-left text-xl text-black font-poppins mq800:gap-6 mq800:pl-6 mq800:pr-[30px] mq800:box-border mq1125:flex-wrap mq1125:gap-12 mq1125:pl-[49px] mq1125:pr-[61px] mq1125:box-border ${className}`}
    >
      <div className="h-[423px] w-[1156px] relative rounded-4xs bg-lavender border-lightsteelblue-200 border-[20px] border-solid box-border hidden max-w-full" />
      <div className="w-[580px] flex flex-col items-start justify-end pt-0 px-0 pb-[20.3px] box-border min-w-[580px] max-w-full mq1125:flex-1 mq1125:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-3 box-border max-w-full">
            <div className="flex-1 relative leading-[36px] font-medium inline-block max-w-full z-[2] mq450:text-base mq450:leading-[29px]">
              <p className="m-0">{`Do not leave thousands of dollars of funeral expenses as a burden to your spouse, children, or grandchildren. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 whitespace-pre-wrap">{`Instead provide coverage for your burial and leave a cash gift for your loved ones.  `}</p>
              <p className="m-0">{` `}</p>
            </div>
          </div>
          <div className="self-stretch bg-steelblue-300 flex flex-row items-start justify-end pt-[22px] px-0 pb-[23px] box-border max-w-full z-[2] text-white">
            <div className="h-[81px] w-[580px] relative bg-steelblue-300 hidden max-w-full" />
            <div className="w-[529px] relative leading-[36px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[29px]">
              <span className="font-semibold">
                We can get you covered from $1,500 to $40,000
              </span>
              <span className="font-medium text-black">.</span>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[353.3px] w-[217.5px] relative z-[2] mq1125:flex-1"
        loading="lazy"
        alt=""
        src="/group-104.svg"
      />
    </div>
  );
};

export default FooterContent1;
