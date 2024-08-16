
const FrameComponent14 = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1168px] flex flex-row items-end justify-between py-0 pl-5 pr-0 box-border gap-5 max-w-full ${className}`}
    >
      <img
        className="h-[74.1px] w-44 relative object-cover"
        loading="lazy"
        alt=""
        src="/main-logo@2x.png"
      />
      <div className="w-[498px] flex flex-col items-start justify-end pt-0 pb-[17px] pl-0 pr-7 box-border max-w-full mq1125:w-7">
        <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-5 text-center text-mid text-steelblue-400 font-poppins mq1125:hidden">
          <b className="flex-1 relative leading-[16px] whitespace-nowrap">
            {" "}
            Marketplace Health plans
          </b>
          <div className="w-[78px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <a href="/about" className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap">{`About `}</a>
          </div>
          <a href="/contact-us" className="[text-decoration:none] w-[78px] relative leading-[16px] font-bold text-[inherit] inline-block shrink-0 min-w-[78px]">
            Contact
          </a>
        </nav>
      </div>
      <div className="w-44 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
        <button className="cursor-pointer [border:none] pt-[23px] pb-[21px] pl-[23px] pr-[11px] bg-crimson self-stretch rounded-16xl flex flex-row items-start justify-start">
          <div className="h-[61px] w-44 relative rounded-16xl bg-crimson hidden z-[1]" />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/whitephone.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-5px]">
            <a className="[text-decoration:none] self-stretch relative text-mini leading-[16px] font-semibold font-poppins text-white text-center z-[1]">
              704-595-7729
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent14;
