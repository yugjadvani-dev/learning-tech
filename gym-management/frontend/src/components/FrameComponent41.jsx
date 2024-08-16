
const FrameComponent41= ({
  className = "",
}) => {
  return (
    <div
      className={`w-full relative flex flex-col items-end justify-start gap-[35px] max-w-full text-center text-xl text-white font-poppins mq750:gap-[17px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5 box-border max-w-full">
        <div className="w-[566px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch bg-darkslateblue-400 flex flex-row items-start justify-center pt-[41px] pb-[26px] pl-[34px] pr-5 box-border max-w-full z-[1]">
            <div className="h-[97px] w-[566px] relative bg-darkslateblue-400 hidden max-w-full" />
            <b className="w-[372px] relative inline-block shrink-0 max-w-full z-[2] mq450:text-base">
              I Have Healthcare Now What?
            </b>
          </div>
          <div className="self-stretch bg-aliceblue-300 flex flex-row items-start justify-center pt-[119px] pb-9 pl-7 pr-5 box-border max-w-full mt-[-94px] mq450:pb-[23px] mq450:box-border">
            <div className="h-[359px] w-[566px] relative bg-aliceblue-300 hidden max-w-full" />
            <img
              className="w-[366px] relative max-h-full object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/image-36@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] max-w-full text-left text-11xl">
        <div className="h-[449px] w-[370px] [background:linear-gradient(180deg,_#8a2547,_#000)] flex flex-row items-start justify-start py-[119px] px-[33px] box-border max-w-full mq450:pt-[77px] mq450:pb-[77px] mq450:box-border">
          <div className="h-[449px] w-[370px] relative [background:linear-gradient(180deg,_#8a2547,_#000)] hidden max-w-full" />
          <h3 className="m-0 relative text-inherit leading-[48px] z-[1] font-inherit mq450:text-lg mq450:leading-[29px] mq750:text-5xl mq750:leading-[38px]">
            <p className="m-0">We Offer Under</p>
            <p className="m-0">
              <b className="font-poppins">{`65 Health Plans `}</b>
              <span>{`And Medicare Plans `}</span>
            </p>
            <p className="m-0 font-black">All Year Long</p>
          </h3>
        </div>
        <div className="h-[449px] w-[29px] relative bg-firebrick" />
        <img
          className="h-[449px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[492px] min-h-[449px] z-[1] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/image-38@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent41;
