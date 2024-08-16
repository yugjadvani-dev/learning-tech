
const FrameComponent4= ({
  className = "",
}) => {
  return (
    <form
      className={`m-0 w-full relative flex flex-col items-start justify-start gap-[41.7px] max-w-[calc(100%_-_835px)] shrink-0 mq450:hidden mq750:max-w-full mq1050:gap-[21px] ${className}`}
    >
      <h1 className="m-0 w-[146px] relative text-17xl font-bold font-poppins text-midnightblue-100 text-left inline-block mq450:text-10xl mq1050:text-3xl">
        Sign-in
      </h1>
      <div className="self-stretch h-[231px] flex flex-col items-start justify-start gap-[3.4px] max-w-full">
        <div className="w-[146px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.6px] box-border">
          <h3 className="m-0 flex-1 relative text-5xl font-bold font-poppins text-darkslateblue-500 text-left mq1050:text-lgi">
            Email*
          </h3>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[12.4px] box-border max-w-full">
          <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkslateblue-500 border-[4px] border-solid box-border max-w-full" />
        </div>
        <h3 className="m-0 w-[146px] h-[30.8px] relative text-5xl font-bold font-poppins text-darkslateblue-500 text-left inline-block shrink-0 mq1050:text-lgi">
          Password*
        </h3>
        <input
          className="border-darkslateblue-500 border-[4px] border-solid [outline:none] bg-white self-stretch h-[69px] relative rounded-3xs box-border min-w-[244px]"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1050:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <input
            className="m-0 h-[27px] w-[29px] relative rounded-10xs border-gray-100 border-[2px] border-solid box-border"
            type="checkbox"
          />
          <div className="relative text-base font-poppins text-slategray-200 text-left inline-block min-w-[128px]">
            Remember me
          </div>
        </div>
        <div className="w-[152px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch relative text-base font-poppins text-midnightblue-100 text-center">
            Forgot Password?
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-[3px] box-border max-w-full">
        <LoginAndRegisterButton2 />
      </div>
    </form>
  );
};

export default FrameComponent4;
