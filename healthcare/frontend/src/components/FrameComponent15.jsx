import { useMemo } from "react";
const FrameComponent15= ({
  className = "",
  propPadding,
  propGap,
  group129,
  security,
  theSecurityOfYourPersonalInfor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-2xl text-darkslategray-400 font-poppins ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[1059px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <img
          className="h-[79px] w-[79px] relative z-[2]"
          loading="lazy"
          alt=""
          src={group129}
        />
      </div>
      <div className="self-stretch relative leading-[25px] z-[1] mq450:text-base mq450:leading-[20px]">
        <p className="[margin-block-start:0] [margin-block-end:61px]">
          <b>{security}</b>
        </p>
        <p className="m-0 text-xl font-medium">
          {theSecurityOfYourPersonalInfor}
        </p>
      </div>
    </div>
  );
};

export default FrameComponent15;
