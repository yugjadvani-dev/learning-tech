
const GroupComponent2 = ({
  className = "",
}) => {
  return (
    <section
      className={`mr-[-3px] mb-[55px] w-full relative [background:linear-gradient(89.98deg,_#125490,_rgba(21,_52,_81,_0)_39.58%,_#153451_70.83%)] flex flex-row items-end justify-center py-0 pl-[127px] pr-[5px] box-border max-w-[101%] shrink-0 [row-gap:20px] text-left text-2xl text-white font-poppins mq450:pl-5 mq450:box-border mq750:pl-[63px] mq750:box-border mq750:flex-wrap ${className}`}
    >
      <div className="self-stretch w-[1453px] relative [background:linear-gradient(89.98deg,_#125490,_rgba(21,_52,_81,_0)_39.58%,_#153451_70.83%)] hidden max-w-full" />
      <div className="h-[509px] w-[25px] relative bg-khaki-200 z-[3] mq750:hidden" />
      <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[118px] box-border min-w-[510px] max-w-full mq450:pr-5 mq450:box-border mq750:min-w-full mq1050:pr-[59px] mq1050:box-border">
        <div className="w-[392px] bg-steelblue-600 flex flex-row items-start justify-start pt-[26px] pb-[21px] pl-[33px] pr-[19px] box-border max-w-full z-[2]">
          <div className="h-[115px] w-[392px] relative bg-steelblue-600 hidden max-w-full" />
          <b className="flex-1 relative leading-[34px] inline-block max-w-full z-[3] mq450:text-mid mq450:leading-[27px]">
            2022 Elite Marketplace Circle of Champions serving in ...
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
          <div className="w-[294px] bg-darkslategray-700 flex flex-row items-start justify-start pt-[33px] px-[33px] pb-[31px] box-border min-w-[294px] z-[1] mq750:flex-1">
            <div className="h-[337px] w-[294px] relative bg-darkslategray-700 hidden" />
            <b className="flex-1 relative leading-[34px] z-[2] mq450:text-mid mq450:leading-[27px]">
              <ul className="m-0 font-inherit text-inherit pl-7">
                <li className="mb-0">North Carolina</li>
                <li className="mb-0">South Carolina</li>
                <li className="mb-0">Tennessee</li>
                <li className="mb-0">Georgia</li>
                <li className="mb-0">{`Alabama `}</li>
                <li className="mb-0">{`Los Angeles, `}</li>
                <li className="mb-0">FLorida</li>
                <li>Texas</li>
              </ul>
            </b>
          </div>
          <div className="h-[311px] w-[274px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border min-w-[274px] mq750:flex-1">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq750:self-stretch mq750:w-auto"
              loading="lazy"
              alt=""
              src="/image-39@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[512px] flex flex-col items-start justify-start pt-0 px-0 pb-[90px] box-border min-h-[392px] max-w-full text-right text-base mq450:pb-[58px] mq450:box-border mq750:flex-1">
        <div className="self-stretch bg-darkslateblue-400 flex flex-row items-start justify-start py-[30px] px-[51px] box-border min-h-[302px] max-w-full z-[1] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
          <div className="h-[302px] w-[512px] relative bg-darkslateblue-400 hidden max-w-full" />
          <div className="w-[372px] relative leading-[34px] font-medium inline-block shrink-0 max-w-full z-[2]">
            <p className="m-0">
              We are proud partners of the 2021 Marketplace Elite Circle of
              Champions
            </p>
            <p className="m-0">{` `}</p>
            <p className="m-0">
              We received this designation because we are among the
              high-performing agents and brokers who help families enroll in
              affordable health insurance coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent2;
