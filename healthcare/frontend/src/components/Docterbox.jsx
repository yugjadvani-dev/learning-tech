import { useMemo } from "react";
const Docterbox= ({
  className = "",
  propGap,
  doctor,
  propHeight,
  propWidth,
  weCanFindOutYourSituationAnd,
}) => {
  const docterboxStyle= useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const doctorIconStyle= useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div
      className={`w-[372px] rounded-6xl bg-darkslategray-300 border-lightsteelblue-300 border-[8px] border-solid box-border flex flex-col items-end justify-start pt-6 pb-[26px] pl-[43px] pr-[57px] gap-[25px] max-w-full z-[1] text-center text-base text-white font-poppins mq450:p-5 mq450:box-border ${className}`}
      style={docterboxStyle}
    >
      <div className="w-[372px] h-[369px] relative rounded-6xl bg-darkslategray-300 border-lightsteelblue-300 border-[8px] border-solid box-border hidden max-w-full" />
      <div className="flex flex-row items-start justify-end py-0 px-[34px]">
        <img
          className="h-[171px] w-[171px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={doctor}
          style={doctorIconStyle}
        />
      </div>
      <b className="w-64 h-[105px] relative leading-[28px] inline-block shrink-0 z-[1]">
        {weCanFindOutYourSituationAnd}
      </b>
    </div>
  );
};

export default Docterbox;
