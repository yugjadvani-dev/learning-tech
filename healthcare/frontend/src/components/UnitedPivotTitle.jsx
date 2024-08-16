import { useMemo } from "react";

const UnitedPivotTitle = ({
  className = "",
  propAlignSelf,
  propFlex,
  unitedHealthcare,
  propAlignSelf1,
}) => {
  const unitedPivotTitleStyle= useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const unitedHealthcareStyle= useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-8 text-center text-10xl text-darkslateblue-100 font-poppins mq450:gap-4 ${className}`}
      style={unitedPivotTitleStyle}
    >
      <h3
        className="m-0 relative text-inherit font-extrabold font-inherit z-[8] mq450:text-4xl"
        style={unitedHealthcareStyle}
      >
        {unitedHealthcare}
      </h3>
      <div className="self-stretch h-[61px] relative text-2xl text-white">
        <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[8]" />
        <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] whitespace-nowrap z-[9] mq450:text-mid mq450:leading-[27px]">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default UnitedPivotTitle;
