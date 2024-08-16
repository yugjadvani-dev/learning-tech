
const FrameComponent22 = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full relative flex flex-row flex-wrap items-start justify-start gap-5 max-w-full text-center text-xl text-white font-poppins ${className}`}
    >
      <div className="flex-1 bg-aliceblue-300 flex flex-col items-start justify-start pt-0 px-0 pb-[33px] box-border gap-[23px] min-w-[369px] max-w-full mq450:min-w-full">
        <div className="self-stretch h-[359px] relative bg-aliceblue-300 hidden" />
        <button className="cursor-pointer [border:none] pt-[39px] pb-7 pl-[33px] pr-5 bg-darkslateblue-400 self-stretch flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-steelblue-400">
          <div className="h-[97px] w-[568px] relative bg-darkslateblue-400 hidden max-w-full" />
          <b className="w-[371px] relative text-xl inline-block font-poppins text-white text-center shrink-0 max-w-full z-[2] mq450:text-base">
            Why Use A Healthcare Agent
          </b>
        </button>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="w-[372px] relative max-h-full object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/image-34@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 bg-aliceblue-300 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[23px] min-w-[369px] max-w-full mq450:min-w-full">
        <div className="self-stretch h-[359px] relative bg-aliceblue-300 hidden" />
        <div className="self-stretch bg-darkslateblue-400 flex flex-row items-start justify-center pt-[38px] px-5 pb-7 box-border max-w-full z-[1]">
          <div className="h-[97px] w-[568px] relative bg-darkslateblue-400 hidden max-w-full" />
          <b className="w-[381px] relative inline-block shrink-0 max-w-full z-[2] mq450:text-base">
            What Are The 10 Essential Benefits?
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[29px] box-border max-w-full">
          <img
            className="w-[381px] relative max-h-full object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/image-35@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent22;
