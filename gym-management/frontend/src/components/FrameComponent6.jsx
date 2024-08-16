import LoginAndRegisterButton3 from "./LoginAndRegisterButton3";
const FrameComponent6= ({
  className = "",
}) => {
  return (
    <form
      className={`m-0 w-[474px] flex flex-col items-start justify-start gap-[11.8px] max-w-[calc(100%_-_790px)] shrink-0 mq1050:hidden mq1150:max-w-full ${className}`}
    >
      <div className="w-[187px] flex flex-row items-start justify-start pt-0 px-0 pb-[9.2px] box-border">
        <h3 className="m-0 flex-1 relative text-17xl font-bold font-poppins text-midnightblue-100 text-left mq1050:text-10xl mq450:text-3xl">
          Sign-up
        </h3>
      </div>
      <div className="self-stretch h-48 flex flex-row items-start justify-start py-0 pl-[35px] pr-[33px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10.4px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-px">
            <b className="relative text-5xl font-poppins text-darkslateblue-500 text-left mq450:text-lgi">
              Username*
            </b>
            <input
              className="border-darkslateblue-500 border-[4px] border-solid [outline:none] bg-white self-stretch h-[54px] relative rounded-3xs box-border min-w-[244px]"
              type="text"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[3.4px]">
            <b className="w-[146px] h-[32.2px] relative text-5xl inline-block font-poppins text-darkslateblue-500 text-left shrink-0 mq450:text-lgi">
              Email*
            </b>
            <input type="email" className="self-stretch flex-1 relative rounded-3xs bg-white border-darkslateblue-500 border-[4px] border-solid" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[212.4px] flex flex-row items-start justify-start pt-0 pb-[24.2px] pl-[35px] pr-[33px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[11.8px] max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[3.4px]">
            <b className="w-[243px] h-[30.8px] relative text-5xl inline-block font-poppins text-darkslateblue-500 text-left shrink-0 mq450:text-lgi">
              Create Password*
            </b>
            <input type="password" className="self-stretch flex-1 relative rounded-3xs bg-white border-darkslateblue-500 border-[4px] border-solid" />
          </div>
          <div className="self-stretch h-[88.2px] relative">
            <input type="password" className="absolute top-[34.2px] left-[0px] rounded-3xs bg-white border-darkslateblue-500 border-[4px] border-solid box-border w-[406px] h-[54px]" />
            <b className="absolute top-[0px] left-[0px] text-5xl inline-block font-poppins text-darkslateblue-500 text-left w-[243px] h-[36.9px] mq450:text-lgi">
              Re-type Password*
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[23.2px] pl-[39px] pr-9 box-border max-w-full">
        <LoginAndRegisterButton3 />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[35px] pr-0 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[19px] max-w-full">
          <input
            className="m-0 h-[27px] w-[29px] relative rounded-10xs border-gray-100 border-[2px] border-solid box-border"
            type="checkbox"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[254px] max-w-full">
            <div className="self-stretch relative text-base font-poppins text-gray-300 text-left">
              Accept all the Terms and Conditions
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent6;
