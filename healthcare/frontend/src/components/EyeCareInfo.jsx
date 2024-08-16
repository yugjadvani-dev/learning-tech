
const EyeCareInfo = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border max-w-full text-right text-20xl text-gray-800 font-poppins ${className}`}
    >
      <div className="w-[852px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[568px] bg-sienna-200 flex flex-row items-start justify-end pt-[37px] px-[35px] pb-4 box-border max-w-full z-[2]">
          <div className="h-[151px] w-[568px] relative bg-sienna-200 hidden max-w-full" />
          <h1 className="m-0 w-[448px] relative text-inherit leading-[49px] font-extrabold font-inherit inline-block shrink-0 max-w-full z-[3] mq750:text-12xl mq750:leading-[39px] mq450:text-4xl mq450:leading-[29px]">
            Why Enroll in a Vision Insurance Plan
          </h1>
        </div>
      </div>
      <div className="self-stretch bg-darkslategray-500 flex flex-col items-start justify-start pt-[76px] pb-[68px] pl-[157px] pr-5 box-border gap-[43px] max-w-full z-[4] mt-[-4px] text-left text-17xl text-white mq750:gap-[21px] mq750:pl-[39px] mq750:box-border mq1275:pl-[78px] mq1275:box-border">
        <div className="w-[1440px] h-[239px] relative bg-darkslategray-500 hidden max-w-full" />
        <h1 className="m-0 w-[1138px] relative text-inherit leading-[26px] font-bold font-inherit inline-block max-w-full z-[5] mq750:text-10xl mq750:leading-[21px] mq450:text-3xl mq450:leading-[16px]">
          <p className="m-0">
            Because protecting your eyes starts with routine eye exams
          </p>
          <p className="m-0"></p>
        </h1>
        <h2 className="m-0 w-[1138px] relative text-9xl leading-[26px] font-bold font-inherit inline-block max-w-full z-[5] mq450:text-3xl mq450:leading-[21px]">
          And benefits for eye exams start on day one
        </h2>
      </div>
    </div>
  );
};

export default EyeCareInfo;
